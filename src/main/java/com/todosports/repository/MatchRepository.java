package com.todosports.repository;

import com.todosports.domain.Match;
import org.springframework.data.domain.Pageable;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.relational.core.query.Criteria;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Spring Data SQL reactive repository for the Match entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MatchRepository extends ReactiveCrudRepository<Match, Long>, MatchRepositoryInternal {
    @Query("SELECT * FROM match entity WHERE entity.event_id = :id")
    Flux<Match> findByEvent(Long id);

    @Query("SELECT * FROM match entity WHERE entity.event_id IS NULL")
    Flux<Match> findAllWhereEventIsNull();

    @Query("SELECT * FROM match entity WHERE entity.posesion_id = :id")
    Flux<Match> findByPosesion(Long id);

    @Query("SELECT * FROM match entity WHERE entity.posesion_id IS NULL")
    Flux<Match> findAllWherePosesionIsNull();

    @Override
    <S extends Match> Mono<S> save(S entity);

    @Override
    Flux<Match> findAll();

    @Override
    Mono<Match> findById(Long id);

    @Override
    Mono<Void> deleteById(Long id);
}

interface MatchRepositoryInternal {
    <S extends Match> Mono<S> save(S entity);

    Flux<Match> findAllBy(Pageable pageable);

    Flux<Match> findAll();

    Mono<Match> findById(Long id);
    // this is not supported at the moment because of https://github.com/jhipster/generator-jhipster/issues/18269
    // Flux<Match> findAllBy(Pageable pageable, Criteria criteria);

}
