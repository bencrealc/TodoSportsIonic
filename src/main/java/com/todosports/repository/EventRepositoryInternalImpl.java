package com.todosports.repository;

import static org.springframework.data.relational.core.query.Criteria.where;

import com.todosports.domain.Event;
import com.todosports.domain.enumeration.EventType;
import com.todosports.repository.rowmapper.EventRowMapper;
import com.todosports.repository.rowmapper.MatchRowMapper;
import io.r2dbc.spi.Row;
import io.r2dbc.spi.RowMetadata;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.function.BiFunction;
import org.springframework.data.domain.Pageable;
import org.springframework.data.r2dbc.convert.R2dbcConverter;
import org.springframework.data.r2dbc.core.R2dbcEntityOperations;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.r2dbc.repository.support.SimpleR2dbcRepository;
import org.springframework.data.relational.core.query.Criteria;
import org.springframework.data.relational.core.sql.Column;
import org.springframework.data.relational.core.sql.Comparison;
import org.springframework.data.relational.core.sql.Condition;
import org.springframework.data.relational.core.sql.Conditions;
import org.springframework.data.relational.core.sql.Expression;
import org.springframework.data.relational.core.sql.Select;
import org.springframework.data.relational.core.sql.SelectBuilder.SelectFromAndJoinCondition;
import org.springframework.data.relational.core.sql.Table;
import org.springframework.data.relational.repository.support.MappingRelationalEntityInformation;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.r2dbc.core.RowsFetchSpec;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Spring Data SQL reactive custom repository implementation for the Event entity.
 */
@SuppressWarnings("unused")
class EventRepositoryInternalImpl extends SimpleR2dbcRepository<Event, Long> implements EventRepositoryInternal {

    private final DatabaseClient db;
    private final R2dbcEntityTemplate r2dbcEntityTemplate;
    private final EntityManager entityManager;

    private final MatchRowMapper matchMapper;
    private final EventRowMapper eventMapper;

    private static final Table entityTable = Table.aliased("event", EntityManager.ENTITY_ALIAS);
    private static final Table matchTable = Table.aliased("match", "e_match");

    public EventRepositoryInternalImpl(
        R2dbcEntityTemplate template,
        EntityManager entityManager,
        MatchRowMapper matchMapper,
        EventRowMapper eventMapper,
        R2dbcEntityOperations entityOperations,
        R2dbcConverter converter
    ) {
        super(
            new MappingRelationalEntityInformation(converter.getMappingContext().getRequiredPersistentEntity(Event.class)),
            entityOperations,
            converter
        );
        this.db = template.getDatabaseClient();
        this.r2dbcEntityTemplate = template;
        this.entityManager = entityManager;
        this.matchMapper = matchMapper;
        this.eventMapper = eventMapper;
    }

    @Override
    public Flux<Event> findAllBy(Pageable pageable) {
        return createQuery(pageable, null).all();
    }

    RowsFetchSpec<Event> createQuery(Pageable pageable, Condition whereClause) {
        List<Expression> columns = EventSqlHelper.getColumns(entityTable, EntityManager.ENTITY_ALIAS);
        columns.addAll(MatchSqlHelper.getColumns(matchTable, "match"));
        SelectFromAndJoinCondition selectFrom = Select
            .builder()
            .select(columns)
            .from(entityTable)
            .leftOuterJoin(matchTable)
            .on(Column.create("match_id", entityTable))
            .equals(Column.create("id", matchTable));
        // we do not support Criteria here for now as of https://github.com/jhipster/generator-jhipster/issues/18269
        String select = entityManager.createSelect(selectFrom, Event.class, pageable, whereClause);
        return db.sql(select).map(this::process);
    }

    @Override
    public Flux<Event> findAll() {
        return findAllBy(null);
    }

    @Override
    public Mono<Event> findById(Long id) {
        Comparison whereClause = Conditions.isEqual(entityTable.column("id"), Conditions.just(id.toString()));
        return createQuery(null, whereClause).one();
    }

    private Event process(Row row, RowMetadata metadata) {
        Event entity = eventMapper.apply(row, "e");
        entity.setMatch(matchMapper.apply(row, "match"));
        return entity;
    }

    @Override
    public <S extends Event> Mono<S> save(S entity) {
        return super.save(entity);
    }
}
