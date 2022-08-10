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
    @Override
    <S extends Match> Mono<S> save(S entity);

    @Query("SELECT * FROM match entity ORDER BY match_day")
    Flux<Match> findAll();

    @Query("SELECT * FROM match WHERE( match_day  + interval '2 hour') <NOW() ORDER BY match_day")
    Flux<Match> findMatchesFinished();

    @Query("SELECT * FROM match WHERE match_day>= (NOW() - interval '2 hour') ORDER BY match_day")
    Flux<Match> findMatchesToplay();

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
