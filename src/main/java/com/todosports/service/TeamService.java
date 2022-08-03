package com.todosports.service;

import com.todosports.domain.Team;
import java.util.List;
import org.springframework.data.domain.Pageable;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Interface for managing {@link Team}.
 */
public interface TeamService {
    /**
     * Save a team.
     *
     * @param team the entity to save.
     * @return the persisted entity.
     */
    Mono<Team> save(Team team);

    /**
     * Updates a team.
     *
     * @param team the entity to update.
     * @return the persisted entity.
     */
    Mono<Team> update(Team team);

    /**
     * Partially updates a team.
     *
     * @param team the entity to update partially.
     * @return the persisted entity.
     */
    Mono<Team> partialUpdate(Team team);

    /**
     * Get all the teams.
     *
     * @return the list of entities.
     */
    Flux<Team> findAll();

    /**
     * Get all the teams with eager load of many-to-many relationships.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Flux<Team> findAllWithEagerRelationships(Pageable pageable);

    /**
     * Returns the number of teams available.
     * @return the number of entities in the database.
     *
     */
    Mono<Long> countAll();

    /**
     * Get the "id" team.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Mono<Team> findOne(Long id);

    /**
     * Delete the "id" team.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    Mono<Void> delete(Long id);
}
