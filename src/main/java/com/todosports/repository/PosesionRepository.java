package com.todosports.repository;

import com.todosports.domain.Posesion;
import org.springframework.data.domain.Pageable;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.relational.core.query.Criteria;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Spring Data SQL reactive repository for the Posesion entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PosesionRepository extends ReactiveCrudRepository<Posesion, Long>, PosesionRepositoryInternal {
    @Query("SELECT * FROM posesion entity WHERE entity.match_id = :id")
    Flux<Posesion> findByMatch(Long id);

    @Query("SELECT * FROM posesion entity WHERE entity.match_id IS NULL")
    Flux<Posesion> findAllWhereMatchIsNull();

    @Query("SELECT * FROM posesion entity WHERE entity.jhi_end IS NULL ORDER BY entity.start DESC LIMIT 1 ")
    Mono<Posesion> findByMaxStart();

    @Override
    <S extends Posesion> Mono<S> save(S entity);

    @Override
    Flux<Posesion> findAll();

    @Override
    Mono<Posesion> findById(Long id);

    @Override
    Mono<Void> deleteById(Long id);
}

interface PosesionRepositoryInternal {
    <S extends Posesion> Mono<S> save(S entity);

    Flux<Posesion> findAllBy(Pageable pageable);

    Flux<Posesion> findAll();

    Mono<Posesion> findById(Long id);
    // this is not supported at the moment because of https://github.com/jhipster/generator-jhipster/issues/18269
    // Flux<Posesion> findAllBy(Pageable pageable, Criteria criteria);

}
