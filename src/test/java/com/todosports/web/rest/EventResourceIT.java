package com.todosports.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import com.todosports.IntegrationTest;
import com.todosports.domain.Event;
import com.todosports.domain.enumeration.EventType;
import com.todosports.repository.EntityManager;
import com.todosports.repository.EventRepository;
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
 * Integration tests for the {@link EventResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class EventResourceIT {

    private static final EventType DEFAULT_EVENT_TYPE = EventType.GOL;
    private static final EventType UPDATED_EVENT_TYPE = EventType.FALTA;

    private static final Boolean DEFAULT_TEAM = false;
    private static final Boolean UPDATED_TEAM = true;

    private static final String ENTITY_API_URL = "/api/events";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private WebTestClient webTestClient;

    private Event event;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Event createEntity(EntityManager em) {
        Event event = new Event().eventType(DEFAULT_EVENT_TYPE).team(DEFAULT_TEAM);
        return event;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Event createUpdatedEntity(EntityManager em) {
        Event event = new Event().eventType(UPDATED_EVENT_TYPE).team(UPDATED_TEAM);
        return event;
    }

    public static void deleteEntities(EntityManager em) {
        try {
            em.deleteAll(Event.class).block();
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
        event = createEntity(em);
    }

    @Test
    void createEvent() throws Exception {
        int databaseSizeBeforeCreate = eventRepository.findAll().collectList().block().size();
        // Create the Event
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(event))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeCreate + 1);
        Event testEvent = eventList.get(eventList.size() - 1);
        assertThat(testEvent.getEventType()).isEqualTo(DEFAULT_EVENT_TYPE);
        assertThat(testEvent.getTeam()).isEqualTo(DEFAULT_TEAM);
    }

    @Test
    void createEventWithExistingId() throws Exception {
        // Create the Event with an existing ID
        event.setId(1L);

        int databaseSizeBeforeCreate = eventRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(event))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllEventsAsStream() {
        // Initialize the database
        eventRepository.save(event).block();

        List<Event> eventList = webTestClient
            .get()
            .uri(ENTITY_API_URL)
            .accept(MediaType.APPLICATION_NDJSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentTypeCompatibleWith(MediaType.APPLICATION_NDJSON)
            .returnResult(Event.class)
            .getResponseBody()
            .filter(event::equals)
            .collectList()
            .block(Duration.ofSeconds(5));

        assertThat(eventList).isNotNull();
        assertThat(eventList).hasSize(1);
        Event testEvent = eventList.get(0);
        assertThat(testEvent.getEventType()).isEqualTo(DEFAULT_EVENT_TYPE);
        assertThat(testEvent.getTeam()).isEqualTo(DEFAULT_TEAM);
    }

    @Test
    void getAllEvents() {
        // Initialize the database
        eventRepository.save(event).block();

        // Get all the eventList
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
            .value(hasItem(event.getId().intValue()))
            .jsonPath("$.[*].eventType")
            .value(hasItem(DEFAULT_EVENT_TYPE.toString()))
            .jsonPath("$.[*].team")
            .value(hasItem(DEFAULT_TEAM.booleanValue()));
    }

    @Test
    void getEvent() {
        // Initialize the database
        eventRepository.save(event).block();

        // Get the event
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, event.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(event.getId().intValue()))
            .jsonPath("$.eventType")
            .value(is(DEFAULT_EVENT_TYPE.toString()))
            .jsonPath("$.team")
            .value(is(DEFAULT_TEAM.booleanValue()));
    }

    @Test
    void getNonExistingEvent() {
        // Get the event
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putNewEvent() throws Exception {
        // Initialize the database
        eventRepository.save(event).block();

        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();

        // Update the event
        Event updatedEvent = eventRepository.findById(event.getId()).block();
        updatedEvent.eventType(UPDATED_EVENT_TYPE).team(UPDATED_TEAM);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, updatedEvent.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(updatedEvent))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
        Event testEvent = eventList.get(eventList.size() - 1);
        assertThat(testEvent.getEventType()).isEqualTo(UPDATED_EVENT_TYPE);
        assertThat(testEvent.getTeam()).isEqualTo(UPDATED_TEAM);
    }

    @Test
    void putNonExistingEvent() throws Exception {
        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();
        event.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, event.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(event))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchEvent() throws Exception {
        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();
        event.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(event))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamEvent() throws Exception {
        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();
        event.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(event))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateEventWithPatch() throws Exception {
        // Initialize the database
        eventRepository.save(event).block();

        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();

        // Update the event using partial update
        Event partialUpdatedEvent = new Event();
        partialUpdatedEvent.setId(event.getId());

        partialUpdatedEvent.team(UPDATED_TEAM);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedEvent.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEvent))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
        Event testEvent = eventList.get(eventList.size() - 1);
        assertThat(testEvent.getEventType()).isEqualTo(DEFAULT_EVENT_TYPE);
        assertThat(testEvent.getTeam()).isEqualTo(UPDATED_TEAM);
    }

    @Test
    void fullUpdateEventWithPatch() throws Exception {
        // Initialize the database
        eventRepository.save(event).block();

        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();

        // Update the event using partial update
        Event partialUpdatedEvent = new Event();
        partialUpdatedEvent.setId(event.getId());

        partialUpdatedEvent.eventType(UPDATED_EVENT_TYPE).team(UPDATED_TEAM);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedEvent.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEvent))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
        Event testEvent = eventList.get(eventList.size() - 1);
        assertThat(testEvent.getEventType()).isEqualTo(UPDATED_EVENT_TYPE);
        assertThat(testEvent.getTeam()).isEqualTo(UPDATED_TEAM);
    }

    @Test
    void patchNonExistingEvent() throws Exception {
        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();
        event.setId(count.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, event.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(event))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchEvent() throws Exception {
        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();
        event.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(event))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamEvent() throws Exception {
        int databaseSizeBeforeUpdate = eventRepository.findAll().collectList().block().size();
        event.setId(count.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(event))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Event in the database
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteEvent() {
        // Initialize the database
        eventRepository.save(event).block();

        int databaseSizeBeforeDelete = eventRepository.findAll().collectList().block().size();

        // Delete the event
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, event.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        List<Event> eventList = eventRepository.findAll().collectList().block();
        assertThat(eventList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
