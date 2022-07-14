package com.todosports.repository.rowmapper;

import com.todosports.domain.Match;
import io.r2dbc.spi.Row;
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
        entity.setLocal(converter.fromRow(row, prefix + "_local", String.class));
        entity.setAway(converter.fromRow(row, prefix + "_away", String.class));
        entity.setEventId(converter.fromRow(row, prefix + "_event_id", Long.class));
        entity.setPosesionId(converter.fromRow(row, prefix + "_posesion_id", Long.class));
        return entity;
    }
}
