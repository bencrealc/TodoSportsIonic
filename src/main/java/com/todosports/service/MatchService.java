package com.todosports.service;

import com.todosports.domain.Match;
import java.util.List;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Interface for managing {@link Match}.
 */
public interface MatchService {
    /**
     * Save a match.
     *
     * @param match the entity to save.
     * @return the persisted entity.
     */
    Mono<Match> save(Match match);

    /**
     * Updates a match.
     *
     * @param match the entity to update.
     * @return the persisted entity.
     */
    Mono<Match> update(Match match);

    /**
     * Partially updates a match.
     *
     * @param match the entity to update partially.
     * @return the persisted entity.
     */
    Mono<Match> partialUpdate(Match match);

    /**
     * Get all the matches.
     *
     * @return the list of entities.
     */
    Flux<Match> findAll();

    /**
     * Returns the number of matches available.
     * @return the number of entities in the database.
     *
     */
    Mono<Long> countAll();

    /**
     * Get the "id" match.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Mono<Match> findOne(Long id);

    /**
     * Delete the "id" match.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    Mono<Void> delete(Long id);
}
