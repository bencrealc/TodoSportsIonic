package com.todosports.service.impl;

import com.todosports.domain.Match;
import com.todosports.repository.MatchRepository;
import com.todosports.service.MatchService;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Implementation for managing {@link Match}.
 */
@Service
@Transactional
public class MatchServiceImpl implements MatchService {

    private final Logger log = LoggerFactory.getLogger(MatchServiceImpl.class);

    private final MatchRepository matchRepository;

    public MatchServiceImpl(MatchRepository matchRepository) {
        this.matchRepository = matchRepository;
    }

    @Override
    public Mono<Match> save(Match match) {
        log.debug("Request to save Match : {}", match);
        return matchRepository.save(match);
    }

    @Override
    public Mono<Match> update(Match match) {
        log.debug("Request to save Match : {}", match);
        return matchRepository.save(match);
    }

    @Override
    public Mono<Match> partialUpdate(Match match) {
        log.debug("Request to partially update Match : {}", match);

        return matchRepository
            .findById(match.getId())
            .map(existingMatch -> {
                if (match.getLocal() != null) {
                    existingMatch.setLocal(match.getLocal());
                }
                if (match.getAway() != null) {
                    existingMatch.setAway(match.getAway());
                }

                return existingMatch;
            })
            .flatMap(matchRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Flux<Match> findAll() {
        log.debug("Request to get all Matches");
        return matchRepository.findAll();
    }

    public Mono<Long> countAll() {
        return matchRepository.count();
    }

    @Override
    @Transactional(readOnly = true)
    public Mono<Match> findOne(Long id) {
        log.debug("Request to get Match : {}", id);
        return matchRepository.findById(id);
    }

    @Override
    public Mono<Void> delete(Long id) {
        log.debug("Request to delete Match : {}", id);
        return matchRepository.deleteById(id);
    }
}
