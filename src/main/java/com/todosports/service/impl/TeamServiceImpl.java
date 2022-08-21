package com.todosports.service.impl;

import com.todosports.domain.Team;
import com.todosports.repository.TeamRepository;
import com.todosports.service.TeamService;
import java.util.List;
import javax.validation.OverridesAttribute;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Implementation for managing {@link Team}.
 */
@Service
@Transactional
public class TeamServiceImpl implements TeamService {

    private final Logger log = LoggerFactory.getLogger(TeamServiceImpl.class);

    private final TeamRepository teamRepository;

    public TeamServiceImpl(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @Override
    public Mono<Team> save(Team team) {
        log.debug("Request to save Team : {}", team);
        return teamRepository.save(team);
    }

    @Override
    public Mono<Team> update(Team team) {
        log.debug("Request to save Team : {}", team);
        return teamRepository.save(team);
    }

    @Override
    public Mono<Team> partialUpdate(Team team) {
        log.debug("Request to partially update Team : {}", team);

        return teamRepository
            .findById(team.getId())
            .map(existingTeam -> {
                if (team.getName() != null) {
                    existingTeam.setName(team.getName());
                }

                return existingTeam;
            })
            .flatMap(teamRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Flux<Team> findAll() {
        log.debug("Request to get all Teams");
        return teamRepository.findAllWithEagerRelationships();
    }

    public Flux<Team> findAllWithEagerRelationships(Pageable pageable) {
        return teamRepository.findAllWithEagerRelationships(pageable);
    }

    public Mono<Long> countAll() {
        return teamRepository.count();
    }

    @Override
    @Transactional(readOnly = true)
    public Mono<Team> findOne(Long id) {
        log.debug("Request to get Team : {}", id);
        return teamRepository.findOneWithEagerRelationships(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Mono<Team> findByName(String name) {
        return teamRepository.findName(name);
    }

    @Override
    public Mono<Void> delete(Long id) {
        log.debug("Request to delete Team : {}", id);
        return teamRepository.deleteById(id);
    }
}
