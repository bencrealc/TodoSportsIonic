package com.todosports.web.rest;

import com.todosports.domain.Posesion;
import com.todosports.repository.PosesionRepository;
import com.todosports.service.PosesionService;
import com.todosports.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.reactive.ResponseUtil;

/**
 * REST controller for managing {@link com.todosports.domain.Posesion}.
 */
@RestController
@RequestMapping("/api")
public class PosesionResource {

    private final Logger log = LoggerFactory.getLogger(PosesionResource.class);

    private static final String ENTITY_NAME = "posesion";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PosesionService posesionService;

    private final PosesionRepository posesionRepository;

    public PosesionResource(PosesionService posesionService, PosesionRepository posesionRepository) {
        this.posesionService = posesionService;
        this.posesionRepository = posesionRepository;
    }

    /**
     * {@code POST  /posesions} : Create a new posesion.
     *
     * @param posesion the posesion to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new posesion, or with status {@code 400 (Bad Request)} if the posesion has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/posesions")
    public Mono<ResponseEntity<Posesion>> createPosesion(@RequestBody Posesion posesion) throws URISyntaxException {
        log.debug("REST request to save Posesion : {}", posesion);
        if (posesion.getId() != null) {
            throw new BadRequestAlertException("A new posesion cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return posesionService
            .save(posesion)
            .map(result -> {
                try {
                    return ResponseEntity
                        .created(new URI("/api/posesions/" + result.getId()))
                        .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
                        .body(result);
                } catch (URISyntaxException e) {
                    throw new RuntimeException(e);
                }
            });
    }

    @PostMapping("/posesions/close")
    public Mono<Posesion> endPosesion(@RequestBody Posesion posesion) throws URISyntaxException {
        log.debug("REST request to save Posesion : {}", posesion);
        if (posesion.getId() != null && posesion.getStart() != null) {
            throw new BadRequestAlertException("A new posesion cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return posesionService.close(posesion);
    }

    @PostMapping("/posesions/change")
    public Mono<Posesion> changePosesion(@RequestBody Posesion posesion) throws URISyntaxException {
        log.debug("REST request to save Posesion : {}", posesion);
        if (posesion.getId() != null) {
            throw new BadRequestAlertException("A new posesion cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return posesionService.change(posesion);
    }

    /**
     * {@code PUT  /posesions/:id} : Updates an existing posesion.
     *
     * @param id the id of the posesion to save.
     * @param posesion the posesion to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated posesion,
     * or with status {@code 400 (Bad Request)} if the posesion is not valid,
     * or with status {@code 500 (Internal Server Error)} if the posesion couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/posesions/{id}")
    public Mono<ResponseEntity<Posesion>> updatePosesion(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Posesion posesion
    ) throws URISyntaxException {
        log.debug("REST request to update Posesion : {}, {}", id, posesion);
        if (posesion.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, posesion.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return posesionRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                return posesionService
                    .update(posesion)
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(result ->
                        ResponseEntity
                            .ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
                            .body(result)
                    );
            });
    }

    /**
     * {@code PATCH  /posesions/:id} : Partial updates given fields of an existing posesion, field will ignore if it is null
     *
     * @param id the id of the posesion to save.
     * @param posesion the posesion to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated posesion,
     * or with status {@code 400 (Bad Request)} if the posesion is not valid,
     * or with status {@code 404 (Not Found)} if the posesion is not found,
     * or with status {@code 500 (Internal Server Error)} if the posesion couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/posesions/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public Mono<ResponseEntity<Posesion>> partialUpdatePosesion(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Posesion posesion
    ) throws URISyntaxException {
        log.debug("REST request to partial update Posesion partially : {}, {}", id, posesion);
        if (posesion.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, posesion.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return posesionRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                Mono<Posesion> result = posesionService.partialUpdate(posesion);

                return result
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(res ->
                        ResponseEntity
                            .ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, res.getId().toString()))
                            .body(res)
                    );
            });
    }

    /**
     * {@code GET  /posesions} : get all the posesions.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of posesions in body.
     */
    @GetMapping("/posesions")
    public Mono<List<Posesion>> getAllPosesions() {
        log.debug("REST request to get all Posesions");
        return posesionService.findAll().collectList();
    }

    /**
     * {@code GET  /posesions} : get all the posesions as a stream.
     * @return the {@link Flux} of posesions.
     */
    @GetMapping(value = "/posesions", produces = MediaType.APPLICATION_NDJSON_VALUE)
    public Flux<Posesion> getAllPosesionsAsStream() {
        log.debug("REST request to get all Posesions as a stream");
        return posesionService.findAll();
    }

    /**
     * {@code GET  /posesions/:id} : get the "id" posesion.
     *
     * @param id the id of the posesion to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the posesion, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/posesions/{id}")
    public Mono<ResponseEntity<Posesion>> getPosesion(@PathVariable Long id) {
        log.debug("REST request to get Posesion : {}", id);
        Mono<Posesion> posesion = posesionService.findOne(id);
        return ResponseUtil.wrapOrNotFound(posesion);
    }

    /**
     * {@code DELETE  /posesions/:id} : delete the "id" posesion.
     *
     * @param id the id of the posesion to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/posesions/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public Mono<ResponseEntity<Void>> deletePosesion(@PathVariable Long id) {
        log.debug("REST request to delete Posesion : {}", id);
        return posesionService
            .delete(id)
            .map(result ->
                ResponseEntity
                    .noContent()
                    .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
                    .build()
            );
    }
}
