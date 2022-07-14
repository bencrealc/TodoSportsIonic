package com.todosports.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import com.todosports.IntegrationTest;
import com.todosports.domain.Match;
import com.todosports.repository.EntityManager;
import com.todosports.repository.MatchRepository;
import java.time.Duration;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.reactive.server.WebTestClient;

/**
 * Integration tests for the {@link MatchResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class MatchResourceIT {

    private static final String DEFAULT_LOCAL = "AAAAAAAAAA";
    private static final String UPDATED_LOCAL = "BBBBBBBBBB";

    private static final String DEFAULT_AWAY = "AAAAAAAAAA";
    private static final String UPDATED_AWAY = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/matches";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private WebTestClient webTestClient;

    private Match match;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Match createEntity(EntityManager em) {
        Match match = new Match().local(DEFAULT_LOCAL).away(DEFAULT_AWAY);
        return match;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Match createUpdatedEntity(EntityManager em) {
        Match match = new Match().local(UPDATED_LOCAL).away(UPDATED_AWAY);
        return match;
    }

    public static void deleteEntities(EntityManager em) {
        try {
            em.deleteAll(Match.class).block();
        } catch (Exception e) {
            // It can fail, if other entities are still referring this - it will be removed later.
        }
    }

    @AfterEach
    public void cleanup() {
        deleteEntities(em);
    }

    @BeforeEach
    public void initTest() {
        deleteEntities(em);
        match = createEntity(em);
    }

    @Test
    void createMatch() throws Exception {
        int databaseSizeBeforeCreate = matchRepository.findAll().collectList().block().size();
        // Create the Match
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(match))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeCreate + 1);
        Match testMatch = matchList.get(matchList.size() - 1);
        assertThat(testMatch.getLocal()).isEqualTo(DEFAULT_LOCAL);
        assertThat(testMatch.getAway()).isEqualTo(DEFAULT_AWAY);
    }

    @Test
    void createMatchWithExistingId() throws Exception {
        // Create the Match with an existing ID
        match.setId(1L);

        int databaseSizeBeforeCreate = matchRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(match))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllMatchesAsStream() {
        // Initialize the database
        matchRepository.save(match).block();

        List<Match> matchList = webTestClient
            .get()
            .uri(ENTITY_API_URL)
            .accept(MediaType.APPLICATION_NDJSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentTypeCompatibleWith(MediaType.APPLICATION_NDJSON)
            .returnResult(Match.class)
            .getResponseBody()
            .filter(match::equals)
            .collectList()
            .block(Duration.ofSeconds(5));

        assertThat(matchList).isNotNull();
        assertThat(matchList).hasSize(1);
        Match testMatch = matchList.get(0);
        assertThat(testMatch.getLocal()).isEqualTo(DEFAULT_LOCAL);
        assertThat(testMatch.getAway()).isEqualTo(DEFAULT_AWAY);
    }

    @Test
    void getAllMatches() {
        // Initialize the database
        matchRepository.save(match).block();

        // Get all the matchList
        webTestClient
            .get()
            .uri(ENTITY_API_URL + "?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(match.getId().intValue()))
            .jsonPath("$.[*].local")
            .value(hasItem(DEFAULT_LOCAL))
            .jsonPath("$.[*].away")
            .value(hasItem(DEFAULT_AWAY));
    }

    @Test
    void getMatch() {
        // Initialize the database
        matchRepository.save(match).block();

        // Get the match
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, match.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(match.getId().intValue()))
            .jsonPath("$.local")
            .value(is(DEFAULT_LOCAL))
            .jsonPath("$.away")
            .value(is(DEFAULT_AWAY));
    }

    @Test
    void getNonExistingMatch() {
        // Get the match
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putNewMatch() throws Exception {
        // Initialize the database
        matchRepository.save(match).block();

        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();

        // Update the match
        Match updatedMatch = matchRepository.findById(match.getId()).block();
        updatedMatch.local(UPDATED_LOCAL).away(UPDATED_AWAY);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, updatedMatch.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(updatedMatch))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
        Match testMatch = matchList.get(matchList.size() - 1);
        assertThat(testMatch.getLocal()).isEqualTo(UPDATED_LOCAL);
        assertThat(testMatch.getAway()).isEqualTo(UPDATED_AWAY);
    }

    @Test
    void putNonExistingMatch() throws Exception {
        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();
        match.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, match.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(match))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchMatch() throws Exception {
        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();
        match.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(match))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamMatch() throws Exception {
        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();
        match.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(match))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateMatchWithPatch() throws Exception {
        // Initialize the database
        matchRepository.save(match).block();

        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();

        // Update the match using partial update
        Match partialUpdatedMatch = new Match();
        partialUpdatedMatch.setId(match.getId());

        partialUpdatedMatch.away(UPDATED_AWAY);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedMatch.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedMatch))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
        Match testMatch = matchList.get(matchList.size() - 1);
        assertThat(testMatch.getLocal()).isEqualTo(DEFAULT_LOCAL);
        assertThat(testMatch.getAway()).isEqualTo(UPDATED_AWAY);
    }

    @Test
    void fullUpdateMatchWithPatch() throws Exception {
        // Initialize the database
        matchRepository.save(match).block();

        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();

        // Update the match using partial update
        Match partialUpdatedMatch = new Match();
        partialUpdatedMatch.setId(match.getId());

        partialUpdatedMatch.local(UPDATED_LOCAL).away(UPDATED_AWAY);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedMatch.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedMatch))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
        Match testMatch = matchList.get(matchList.size() - 1);
        assertThat(testMatch.getLocal()).isEqualTo(UPDATED_LOCAL);
        assertThat(testMatch.getAway()).isEqualTo(UPDATED_AWAY);
    }

    @Test
    void patchNonExistingMatch() throws Exception {
        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();
        match.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, match.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(match))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchMatch() throws Exception {
        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();
        match.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(match))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamMatch() throws Exception {
        int databaseSizeBeforeUpdate = matchRepository.findAll().collectList().block().size();
        match.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(match))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Match in the database
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteMatch() {
        // Initialize the database
        matchRepository.save(match).block();

        int databaseSizeBeforeDelete = matchRepository.findAll().collectList().block().size();

        // Delete the match
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, match.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        List<Match> matchList = matchRepository.findAll().collectList().block();
        assertThat(matchList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
