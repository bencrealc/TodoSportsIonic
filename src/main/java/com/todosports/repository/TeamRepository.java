package com.todosports.repository;

import com.todosports.domain.Team;
import org.springframework.data.domain.Pageable;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.relational.core.query.Criteria;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Spring Data SQL reactive repository for the Team entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TeamRepository extends ReactiveCrudRepository<Team, Long>, TeamRepositoryInternal {
    @Override
    Mono<Team> findOneWithEagerRelationships(Long id);

    @Override
    Flux<Team> findAllWithEagerRelationships();

    @Override
    Flux<Team> findAllWithEagerRelationships(Pageable page);

    @Query(
        "SELECT entity.* FROM team entity JOIN rel_team__match joinTable ON entity.id = joinTable.match_id WHERE joinTable.match_id = :id"
    )
    Flux<Team> findByMatch(Long id);

    @Query("SELECT * FROM public.team WHERE team.name =:name")
    Mono<Team> findName(String name);

    @Override
    <S extends Team> Mono<S> save(S entity);

    @Override
    Flux<Team> findAll();

    @Override
    Mono<Team> findById(Long id);

    @Override
    Mono<Void> deleteById(Long id);
}

interface TeamRepositoryInternal {
    <S extends Team> Mono<S> save(S entity);

    Flux<Team> findAllBy(Pageable pageable);

    Flux<Team> findAll();

    Mono<Team> findById(Long id);
    // this is not supported at the moment because of https://github.com/jhipster/generator-jhipster/issues/18269
    // Flux<Team> findAllBy(Pageable pageable, Criteria criteria);

    Mono<Team> findOneWithEagerRelationships(Long id);

    Flux<Team> findAllWithEagerRelationships();

    Flux<Team> findAllWithEagerRelationships(Pageable page);

    Mono<Void> deleteById(Long id);
}
