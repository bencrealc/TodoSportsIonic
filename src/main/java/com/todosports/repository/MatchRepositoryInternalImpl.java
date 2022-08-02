package com.todosports.repository;

import static org.springframework.data.relational.core.query.Criteria.where;

import com.todosports.domain.Match;
import com.todosports.repository.rowmapper.MatchRowMapper;
import com.todosports.repository.rowmapper.TeamRowMapper;
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
import org.springframework.data.relational.core.sql.SelectBuilder.SelectFromAndJoin;
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

    private final MatchRowMapper matchMapper;
    private final TeamRowMapper teamMapper;

    private static final Table entityTable = Table.aliased("match", EntityManager.ENTITY_ALIAS);

    public MatchRepositoryInternalImpl(
        R2dbcEntityTemplate template,
        EntityManager entityManager,
        MatchRowMapper matchMapper,
        TeamRowMapper teamMapper,
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
        this.matchMapper = matchMapper;
        this.teamMapper = teamMapper;
    }

    @Override
    public Flux<Match> findAllBy(Pageable pageable) {
        return createQuery(pageable, null).all();
    }

    RowsFetchSpec<Match> createQuery(Pageable pageable, Condition whereClause) {
        List<Expression> columns = MatchSqlHelper.getColumns(entityTable, EntityManager.ENTITY_ALIAS);
        SelectFromAndJoin selectFrom = Select.builder().select(columns).from(entityTable);
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
        entity.setLocal(teamMapper.apply(row, "local"));
        entity.setAway(teamMapper.apply(row, "away"));
        return entity;
    }

    @Override
    public <S extends Match> Mono<S> save(S entity) {
        return super.save(entity);
    }
}
