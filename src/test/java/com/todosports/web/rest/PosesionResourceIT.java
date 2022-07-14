package com.todosports.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import com.todosports.IntegrationTest;
import com.todosports.domain.Posesion;
import com.todosports.repository.EntityManager;
import com.todosports.repository.PosesionRepository;
import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
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
 * Integration tests for the {@link PosesionResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class PosesionResourceIT {

    private static final Boolean DEFAULT_TEAM = false;
    private static final Boolean UPDATED_TEAM = true;

    private static final Boolean DEFAULT_PAUSED = false;
    private static final Boolean UPDATED_PAUSED = true;

    private static final Instant DEFAULT_TIME = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_TIME = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final String ENTITY_API_URL = "/api/posesions";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private PosesionRepository posesionRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private WebTestClient webTestClient;

    private Posesion posesion;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Posesion createEntity(EntityManager em) {
        Posesion posesion = new Posesion().team(DEFAULT_TEAM).paused(DEFAULT_PAUSED).time(DEFAULT_TIME);
        return posesion;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Posesion createUpdatedEntity(EntityManager em) {
        Posesion posesion = new Posesion().team(UPDATED_TEAM).paused(UPDATED_PAUSED).time(UPDATED_TIME);
        return posesion;
    }

    public static void deleteEntities(EntityManager em) {
        try {
            em.deleteAll(Posesion.class).block();
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
        posesion = createEntity(em);
    }

    @Test
    void createPosesion() throws Exception {
        int databaseSizeBeforeCreate = posesionRepository.findAll().collectList().block().size();
        // Create the Posesion
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(posesion))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeCreate + 1);
        Posesion testPosesion = posesionList.get(posesionList.size() - 1);
        assertThat(testPosesion.getTeam()).isEqualTo(DEFAULT_TEAM);
        assertThat(testPosesion.getPaused()).isEqualTo(DEFAULT_PAUSED);
        assertThat(testPosesion.getTime()).isEqualTo(DEFAULT_TIME);
    }

    @Test
    void createPosesionWithExistingId() throws Exception {
        // Create the Posesion with an existing ID
        posesion.setId(1L);

        int databaseSizeBeforeCreate = posesionRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(posesion))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllPosesionsAsStream() {
        // Initialize the database
        posesionRepository.save(posesion).block();

        List<Posesion> posesionList = webTestClient
            .get()
            .uri(ENTITY_API_URL)
            .accept(MediaType.APPLICATION_NDJSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentTypeCompatibleWith(MediaType.APPLICATION_NDJSON)
            .returnResult(Posesion.class)
            .getResponseBody()
            .filter(posesion::equals)
            .collectList()
            .block(Duration.ofSeconds(5));

        assertThat(posesionList).isNotNull();
        assertThat(posesionList).hasSize(1);
        Posesion testPosesion = posesionList.get(0);
        assertThat(testPosesion.getTeam()).isEqualTo(DEFAULT_TEAM);
        assertThat(testPosesion.getPaused()).isEqualTo(DEFAULT_PAUSED);
        assertThat(testPosesion.getTime()).isEqualTo(DEFAULT_TIME);
    }

    @Test
    void getAllPosesions() {
        // Initialize the database
        posesionRepository.save(posesion).block();

        // Get all the posesionList
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
            .value(hasItem(posesion.getId().intValue()))
            .jsonPath("$.[*].team")
            .value(hasItem(DEFAULT_TEAM.booleanValue()))
            .jsonPath("$.[*].paused")
            .value(hasItem(DEFAULT_PAUSED.booleanValue()))
            .jsonPath("$.[*].time")
            .value(hasItem(DEFAULT_TIME.toString()));
    }

    @Test
    void getPosesion() {
        // Initialize the database
        posesionRepository.save(posesion).block();

        // Get the posesion
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, posesion.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(posesion.getId().intValue()))
            .jsonPath("$.team")
            .value(is(DEFAULT_TEAM.booleanValue()))
            .jsonPath("$.paused")
            .value(is(DEFAULT_PAUSED.booleanValue()))
            .jsonPath("$.time")
            .value(is(DEFAULT_TIME.toString()));
    }

    @Test
    void getNonExistingPosesion() {
        // Get the posesion
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putNewPosesion() throws Exception {
        // Initialize the database
        posesionRepository.save(posesion).block();

        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();

        // Update the posesion
        Posesion updatedPosesion = posesionRepository.findById(posesion.getId()).block();
        updatedPosesion.team(UPDATED_TEAM).paused(UPDATED_PAUSED).time(UPDATED_TIME);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, updatedPosesion.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(updatedPosesion))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
        Posesion testPosesion = posesionList.get(posesionList.size() - 1);
        assertThat(testPosesion.getTeam()).isEqualTo(UPDATED_TEAM);
        assertThat(testPosesion.getPaused()).isEqualTo(UPDATED_PAUSED);
        assertThat(testPosesion.getTime()).isEqualTo(UPDATED_TIME);
    }

    @Test
    void putNonExistingPosesion() throws Exception {
        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();
        posesion.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, posesion.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(posesion))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchPosesion() throws Exception {
        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();
        posesion.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(posesion))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamPosesion() throws Exception {
        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();
        posesion.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(posesion))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdatePosesionWithPatch() throws Exception {
        // Initialize the database
        posesionRepository.save(posesion).block();

        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();

        // Update the posesion using partial update
        Posesion partialUpdatedPosesion = new Posesion();
        partialUpdatedPosesion.setId(posesion.getId());

        partialUpdatedPosesion.team(UPDATED_TEAM);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedPosesion.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedPosesion))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
        Posesion testPosesion = posesionList.get(posesionList.size() - 1);
        assertThat(testPosesion.getTeam()).isEqualTo(UPDATED_TEAM);
        assertThat(testPosesion.getPaused()).isEqualTo(DEFAULT_PAUSED);
        assertThat(testPosesion.getTime()).isEqualTo(DEFAULT_TIME);
    }

    @Test
    void fullUpdatePosesionWithPatch() throws Exception {
        // Initialize the database
        posesionRepository.save(posesion).block();

        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();

        // Update the posesion using partial update
        Posesion partialUpdatedPosesion = new Posesion();
        partialUpdatedPosesion.setId(posesion.getId());

        partialUpdatedPosesion.team(UPDATED_TEAM).paused(UPDATED_PAUSED).time(UPDATED_TIME);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedPosesion.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedPosesion))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
        Posesion testPosesion = posesionList.get(posesionList.size() - 1);
        assertThat(testPosesion.getTeam()).isEqualTo(UPDATED_TEAM);
        assertThat(testPosesion.getPaused()).isEqualTo(UPDATED_PAUSED);
        assertThat(testPosesion.getTime()).isEqualTo(UPDATED_TIME);
    }

    @Test
    void patchNonExistingPosesion() throws Exception {
        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();
        posesion.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, posesion.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(posesion))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchPosesion() throws Exception {
        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();
        posesion.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(posesion))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamPosesion() throws Exception {
        int databaseSizeBeforeUpdate = posesionRepository.findAll().collectList().block().size();
        posesion.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(posesion))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Posesion in the database
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deletePosesion() {
        // Initialize the database
        posesionRepository.save(posesion).block();

        int databaseSizeBeforeDelete = posesionRepository.findAll().collectList().block().size();

        // Delete the posesion
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, posesion.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        List<Posesion> posesionList = posesionRepository.findAll().collectList().block();
        assertThat(posesionList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
