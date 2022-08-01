package com.todosports.repository;

import static org.springframework.data.relational.core.query.Criteria.where;
import static org.springframework.data.relational.core.query.Query.query;

import com.todosports.domain.Match;
import com.todosports.domain.Team;
import com.todosports.repository.rowmapper.TeamRowMapper;
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
import org.springframework.data.relational.core.sql.SelectBuilder.SelectFromAndJoin;
import org.springframework.data.relational.core.sql.Table;
import org.springframework.data.relational.repository.support.MappingRelationalEntityInformation;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.r2dbc.core.RowsFetchSpec;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Spring Data SQL reactive custom repository implementation for the Team entity.
 */
@SuppressWarnings("unused")
class TeamRepositoryInternalImpl extends SimpleR2dbcRepository<Team, Long> implements TeamRepositoryInternal {

    private final DatabaseClient db;
    private final R2dbcEntityTemplate r2dbcEntityTemplate;
    private final EntityManager entityManager;

    private final TeamRowMapper teamMapper;

    private static final Table entityTable = Table.aliased("team", EntityManager.ENTITY_ALIAS);

    private static final EntityManager.LinkTable matchLink = new EntityManager.LinkTable("rel_team__match", "team_id", "match_id");

    public TeamRepositoryInternalImpl(
        R2dbcEntityTemplate template,
        EntityManager entityManager,
        TeamRowMapper teamMapper,
        R2dbcEntityOperations entityOperations,
        R2dbcConverter converter
    ) {
        super(
            new MappingRelationalEntityInformation(converter.getMappingContext().getRequiredPersistentEntity(Team.class)),
            entityOperations,
            converter
        );
        this.db = template.getDatabaseClient();
        this.r2dbcEntityTemplate = template;
        this.entityManager = entityManager;
        this.teamMapper = teamMapper;
    }

    @Override
    public Flux<Team> findAllBy(Pageable pageable) {
        return createQuery(pageable, null).all();
    }

    RowsFetchSpec<Team> createQuery(Pageable pageable, Condition whereClause) {
        List<Expression> columns = TeamSqlHelper.getColumns(entityTable, EntityManager.ENTITY_ALIAS);
        SelectFromAndJoin selectFrom = Select.builder().select(columns).from(entityTable);
        // we do not support Criteria here for now as of https://github.com/jhipster/generator-jhipster/issues/18269
        String select = entityManager.createSelect(selectFrom, Team.class, pageable, whereClause);
        return db.sql(select).map(this::process);
    }

    @Override
    public Flux<Team> findAll() {
        return findAllBy(null);
    }

    @Override
    public Mono<Team> findById(Long id) {
        Comparison whereClause = Conditions.isEqual(entityTable.column("id"), Conditions.just(id.toString()));
        return createQuery(null, whereClause).one();
    }

    @Override
    public Mono<Team> findOneWithEagerRelationships(Long id) {
        return findById(id);
    }

    @Override
    public Flux<Team> findAllWithEagerRelationships() {
        return findAll();
    }

    @Override
    public Flux<Team> findAllWithEagerRelationships(Pageable page) {
        return findAllBy(page);
    }

    private Team process(Row row, RowMetadata metadata) {
        Team entity = teamMapper.apply(row, "e");
        return entity;
    }

    @Override
    public <S extends Team> Mono<S> save(S entity) {
        return super.save(entity);
    }

    protected <S extends Team> Mono<S> updateRelations(S entity) {
        Mono<Void> result = entityManager.updateLinkTable(matchLink, entity.getId(), entity.getMatches().stream().map(Match::getId)).then();
        return result.thenReturn(entity);
    }

    @Override
    public Mono<Void> deleteById(Long entityId) {
        return deleteRelations(entityId).then(super.deleteById(entityId));
    }

    protected Mono<Void> deleteRelations(Long entityId) {
        return entityManager.deleteFromLinkTable(matchLink, entityId);
    }
}
