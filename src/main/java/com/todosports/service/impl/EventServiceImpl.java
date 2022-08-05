package com.todosports.service.impl;

import com.todosports.domain.Event;
import com.todosports.repository.EventRepository;
import com.todosports.service.EventService;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Implementation for managing {@link Event}.
 */
@Service
@Transactional
public class EventServiceImpl implements EventService {

    private final Logger log = LoggerFactory.getLogger(EventServiceImpl.class);

    private final EventRepository eventRepository;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Mono<Event> save(Event event) {
        log.debug("Request to save Event : {}", event);
        return eventRepository.save(event);
    }

    @Override
    public Mono<Event> update(Event event) {
        log.debug("Request to save Event : {}", event);
        return eventRepository.save(event);
    }

    @Override
    public Mono<Event> partialUpdate(Event event) {
        log.debug("Request to partially update Event : {}", event);

        return eventRepository
            .findById(event.getId())
            .map(existingEvent -> {
                if (event.getEventType() != null) {
                    existingEvent.setEventType(event.getEventType());
                }
                if (event.getTeam() != null) {
                    existingEvent.setTeam(event.getTeam());
                }

                return existingEvent;
            })
            .flatMap(eventRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Flux<Event> findAll() {
        log.debug("Request to get all Events");
        return eventRepository.findAll();
    }

    public Mono<Long> countAll() {
        return eventRepository.count();
    }

    @Override
    @Transactional(readOnly = true)
    public Mono<Event> findOne(Long id) {
        log.debug("Request to get Event : {}", id);
        return eventRepository.findById(id);
    }

    @Override
    public Mono<Void> delete(Long id) {
        log.debug("Request to delete Event : {}", id);
        return eventRepository.deleteById(id);
    }

    @Override
    public Flux<Event> findAllLocal(Long id) {
        // TODO Auto-generated method stub
        return eventRepository.findByMatchLocal(id);
    }

    @Override
    public Flux<Event> findAllAway(Long id) {
        // TODO Auto-generated method stub
        return eventRepository.findByMatchAway(id);
    }
}
