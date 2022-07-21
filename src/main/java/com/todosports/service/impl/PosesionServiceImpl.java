package com.todosports.service.impl;

import com.todosports.domain.Posesion;
import com.todosports.repository.PosesionRepository;
import com.todosports.service.PosesionService;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Implementation for managing {@link Posesion}.
 */
@Service
@Transactional
public class PosesionServiceImpl implements PosesionService {

    private final Logger log = LoggerFactory.getLogger(PosesionServiceImpl.class);

    private final PosesionRepository posesionRepository;

    public PosesionServiceImpl(PosesionRepository posesionRepository) {
        this.posesionRepository = posesionRepository;
    }

    @Override
    public Mono<Posesion> save(Posesion posesion) {
        log.debug("Request to save Posesion : {}", posesion);
        return posesionRepository.save(posesion);
    }

    @Override
    public Mono<Posesion> close(Posesion posesion) {
        log.debug("Request to save Posesion : {}", posesion);
        Posesion posesion2 = posesionRepository.findByLastStart();
        posesion2.setEnd(posesion.getEnd());
        return posesionRepository.save(posesion2);
    }

    @Override
    public Mono<Posesion> change(Posesion posesion) {
        log.debug("Request to save Posesion : {}", posesion);
        posesionRepository.save(posesion);
        return close(posesion);
    }

    @Override
    public Mono<Posesion> update(Posesion posesion) {
        log.debug("Request to save Posesion : {}", posesion);
        return posesionRepository.save(posesion);
    }

    @Override
    public Mono<Posesion> partialUpdate(Posesion posesion) {
        log.debug("Request to partially update Posesion : {}", posesion);

        return posesionRepository
            .findById(posesion.getId())
            .map(existingPosesion -> {
                if (posesion.getTeam() != null) {
                    existingPosesion.setTeam(posesion.getTeam());
                }
                if (posesion.getStart() != null) {
                    existingPosesion.setStart(posesion.getStart());
                }
                if (posesion.getEnd() != null) {
                    existingPosesion.setEnd(posesion.getEnd());
                }

                return existingPosesion;
            })
            .flatMap(posesionRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Flux<Posesion> findAll() {
        log.debug("Request to get all Posesions");
        return posesionRepository.findAll();
    }

    public Mono<Long> countAll() {
        return posesionRepository.count();
    }

    @Override
    @Transactional(readOnly = true)
    public Mono<Posesion> findOne(Long id) {
        log.debug("Request to get Posesion : {}", id);
        return posesionRepository.findById(id);
    }

    @Override
    public Mono<Void> delete(Long id) {
        log.debug("Request to delete Posesion : {}", id);
        return posesionRepository.deleteById(id);
    }
}
