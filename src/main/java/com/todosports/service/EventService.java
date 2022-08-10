package com.todosports.service;

import com.todosports.domain.Event;
import java.util.List;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Interface for managing {@link Event}.
 */
public interface EventService {
    /**
     * Save a event.
     *
     * @param event the entity to save.
     * @return the persisted entity.
     */
    Mono<Event> save(Event event);

    /**
     * Updates a event.
     *
     * @param event the entity to update.
     * @return the persisted entity.
     */
    Mono<Event> update(Event event);

    /**
     * Partially updates a event.
     *
     * @param event the entity to update partially.
     * @return the persisted entity.
     */
    Mono<Event> partialUpdate(Event event);

    /**
     * Get all the events.
     *
     * @return the list of entities.
     */
    Flux<Event> findAll();

    /**
     * Returns the number of events available.
     * @return the number of entities in the database.
     *
     */
    Mono<Long> countAll();

    /**
     * Get the "id" event.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Mono<Event> findOne(Long id);

    Flux<Event> findAllLocal(Long id);

    Flux<Event> findAllAway(Long id);

    Mono<Long> findUsers(Long id);

    /**
     * Delete the "id" event.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    Mono<Void> delete(Long id);
}
