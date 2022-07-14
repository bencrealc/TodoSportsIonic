package com.todosports.repository;

import static org.springframework.data.relational.core.query.Criteria.where;

import com.todosports.domain.Match;
import com.todosports.repository.rowmapper.EventRowMapper;
import com.todosports.repository.rowmapper.MatchRowMapper;
import com.todosports.repository.rowmapper.PosesionRowMapper;
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
 * Spring Data SQL reactive custom repository implementation for the Match entity.
 */
@SuppressWarnings("unused")
class MatchRepositoryInternalImpl extends SimpleR2dbcRepository<Match, Long> implements MatchRepositoryInternal {

    private final DatabaseClient db;
    private final R2dbcEntityTemplate r2dbcEntityTemplate;
    private final EntityManager entityManager;

    private final EventRowMapper eventMapper;
    private final PosesionRowMapper posesionMapper;
    private final MatchRowMapper matchMapper;

    private static final Table entityTable = Table.aliased("match", EntityManager.ENTITY_ALIAS);
    private static final Table eventTable = Table.aliased("event", "event");
    private static final Table posesionTable = Table.aliased("posesion", "posesion");

    public MatchRepositoryInternalImpl(
        R2dbcEntityTemplate template,
        EntityManager entityManager,
        EventRowMapper eventMapper,
        PosesionRowMapper posesionMapper,
        MatchRowMapper matchMapper,
        R2dbcEntityOperations entityOperations,
        R2dbcConverter converter
    ) {
        super(
            new MappingRelationalEntityInformation(converter.getMappingContext().getRequiredPersistentEntity(Match.class)),
            entityOperations,
            converter
        );
        this.db = template.getDatabaseClient();
        this.r2dbcEntityTemplate = template;
        this.entityManager = entityManager;
        this.eventMapper = eventMapper;
        this.posesionMapper = posesionMapper;
        this.matchMapper = matchMapper;
    }

    @Override
    public Flux<Match> findAllBy(Pageable pageable) {
        return createQuery(pageable, null).all();
    }

    RowsFetchSpec<Match> createQuery(Pageable pageable, Condition whereClause) {
        List<Expression> columns = MatchSqlHelper.getColumns(entityTable, EntityManager.ENTITY_ALIAS);
        columns.addAll(EventSqlHelper.getColumns(eventTable, "event"));
        columns.addAll(PosesionSqlHelper.getColumns(posesionTable, "posesion"));
        SelectFromAndJoinCondition selectFrom = Select
            .builder()
            .select(columns)
            .from(entityTable)
            .leftOuterJoin(eventTable)
            .on(Column.create("event_id", entityTable))
            .equals(Column.create("id", eventTable))
            .leftOuterJoin(posesionTable)
            .on(Column.create("posesion_id", entityTable))
            .equals(Column.create("id", posesionTable));
        // we do not support Criteria here for now as of https://github.com/jhipster/generator-jhipster/issues/18269
        String select = entityManager.createSelect(selectFrom, Match.class, pageable, whereClause);
        return db.sql(select).map(this::process);
    }

    @Override
    public Flux<Match> findAll() {
        return findAllBy(null);
    }

    @Override
    public Mono<Match> findById(Long id) {
        Comparison whereClause = Conditions.isEqual(entityTable.column("id"), Conditions.just(id.toString()));
        return createQuery(null, whereClause).one();
    }

    private Match process(Row row, RowMetadata metadata) {
        Match entity = matchMapper.apply(row, "e");
        entity.setEvent(eventMapper.apply(row, "event"));
        entity.setPosesion(posesionMapper.apply(row, "posesion"));
        return entity;
    }

    @Override
    public <S extends Match> Mono<S> save(S entity) {
        return super.save(entity);
    }
}
