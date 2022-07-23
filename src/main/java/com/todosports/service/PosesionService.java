package com.todosports.service;

import com.todosports.domain.Posesion;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Interface for managing {@link Posesion}.
 */
public interface PosesionService {
    /**
     * Save a posesion.
     *
     * @param posesion the entity to save.
     * @return the persisted entity.
     */
    Mono<Posesion> save(Posesion posesion);

    Mono<Posesion> close(Posesion posesion);

    /**
     * Updates a posesion.
     *
     * @param posesion the entity to update.
     * @return the persisted entity.
     */
    Mono<Posesion> update(Posesion posesion);

    /**
     * Partially updates a posesion.
     *
     * @param posesion the entity to update partially.
     * @return the persisted entity.
     */
    Mono<Posesion> partialUpdate(Posesion posesion);

    /**
     * Get all the posesions.
     *
     * @return the list of entities.
     */
    Flux<Posesion> findAll();

    /**
     * Returns the number of posesions available.
     * @return the number of entities in the database.
     *
     */
    Mono<Long> countAll();

    /**
     * Get the "id" posesion.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Mono<Posesion> findOne(Long id);

    /**
     * Delete the "id" posesion.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    Mono<Void> delete(Long id);
}
