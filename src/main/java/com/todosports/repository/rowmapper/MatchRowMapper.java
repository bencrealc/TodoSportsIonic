package com.todosports.repository.rowmapper;

import com.todosports.domain.Match;
import io.r2dbc.spi.Row;
import java.time.Instant;
import java.util.function.BiFunction;
import org.springframework.stereotype.Service;

/**
 * Converter between {@link Row} to {@link Match}, with proper type conversions.
 */
@Service
public class MatchRowMapper implements BiFunction<Row, String, Match> {

    private final ColumnConverter converter;

    public MatchRowMapper(ColumnConverter converter) {
        this.converter = converter;
    }

    /**
     * Take a {@link Row} and a column prefix, and extract all the fields.
     * @return the {@link Match} stored in the database.
     */
    @Override
    public Match apply(Row row, String prefix) {
        Match entity = new Match();
        entity.setId(converter.fromRow(row, prefix + "_id", Long.class));
        entity.setLocalId(converter.fromRow(row, prefix + "_local_id", String.class));
        entity.setAwayId(converter.fromRow(row, prefix + "_away_id", String.class));
        entity.setMatchDay(converter.fromRow(row, prefix + "_match_day", Instant.class));
        return entity;
    }
}
