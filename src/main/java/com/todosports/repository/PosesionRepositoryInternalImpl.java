package com.todosports.repository;

import static org.springframework.data.relational.core.query.Criteria.where;

import com.todosports.domain.Posesion;
import com.todosports.repository.rowmapper.MatchRowMapper;
import com.todosports.repository.rowmapper.PosesionRowMapper;
import io.r2dbc.spi.Row;
import io.r2dbc.spi.RowMetadata;
import java.time.Instant;
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
 * Spring Data SQL reactive custom repository implementation for the Posesion entity.
 */
@SuppressWarnings("unused")
class PosesionRepositoryInternalImpl extends SimpleR2dbcRepository<Posesion, Long> implements PosesionRepositoryInternal {

    private final DatabaseClient db;
    private final R2dbcEntityTemplate r2dbcEntityTemplate;
    private final EntityManager entityManager;

    private final MatchRowMapper matchMapper;
    private final PosesionRowMapper posesionMapper;

    private static final Table entityTable = Table.aliased("posesion", EntityManager.ENTITY_ALIAS);
    private static final Table matchTable = Table.aliased("match", "e_match");

    public PosesionRepositoryInternalImpl(
        R2dbcEntityTemplate template,
        EntityManager entityManager,
        MatchRowMapper matchMapper,
        PosesionRowMapper posesionMapper,
        R2dbcEntityOperations entityOperations,
        R2dbcConverter converter
    ) {
        super(
            new MappingRelationalEntityInformation(converter.getMappingContext().getRequiredPersistentEntity(Posesion.class)),
            entityOperations,
            converter
        );
        this.db = template.getDatabaseClient();
        this.r2dbcEntityTemplate = template;
        this.entityManager = entityManager;
        this.matchMapper = matchMapper;
        this.posesionMapper = posesionMapper;
    }

    @Override
    public Flux<Posesion> findAllBy(Pageable pageable) {
        return createQuery(pageable, null).all();
    }

    RowsFetchSpec<Posesion> createQuery(Pageable pageable, Condition whereClause) {
        List<Expression> columns = PosesionSqlHelper.getColumns(entityTable, EntityManager.ENTITY_ALIAS);
        columns.addAll(MatchSqlHelper.getColumns(matchTable, "match"));
        SelectFromAndJoinCondition selectFrom = Select
            .builder()
            .select(columns)
            .from(entityTable)
            .leftOuterJoin(matchTable)
            .on(Column.create("match_id", entityTable))
            .equals(Column.create("id", matchTable));
        // we do not support Criteria here for now as of https://github.com/jhipster/generator-jhipster/issues/18269
        String select = entityManager.createSelect(selectFrom, Posesion.class, pageable, whereClause);
        return db.sql(select).map(this::process);
    }

    @Override
    public Flux<Posesion> findAll() {
        return findAllBy(null);
    }

    @Override
    public Mono<Posesion> findById(Long id) {
        Comparison whereClause = Conditions.isEqual(entityTable.column("id"), Conditions.just(id.toString()));
        return createQuery(null, whereClause).one();
    }

    private Posesion process(Row row, RowMetadata metadata) {
        Posesion entity = posesionMapper.apply(row, "e");
        entity.setMatch(matchMapper.apply(row, "match"));
        return entity;
    }

    @Override
    public <S extends Posesion> Mono<S> save(S entity) {
        return super.save(entity);
    }
}
