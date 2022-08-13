package com.todosports.repository.rowmapper;

import com.todosports.domain.Posesion;
import io.r2dbc.spi.Row;
import java.time.Instant;
import java.util.function.BiFunction;
import org.springframework.stereotype.Service;

/**
 * Converter between {@link Row} to {@link Posesion}, with proper type conversions.
 */
@Service
public class PosesionRowMapper implements BiFunction<Row, String, Posesion> {

    private final ColumnConverter converter;

    public PosesionRowMapper(ColumnConverter converter) {
        this.converter = converter;
    }

    /**
     * Take a {@link Row} and a column prefix, and extract all the fields.
     * @return the {@link Posesion} stored in the database.
     */
    @Override
    public Posesion apply(Row row, String prefix) {
        Posesion entity = new Posesion();
        entity.setId(converter.fromRow(row, prefix + "_id", Long.class));
        entity.setTeam(converter.fromRow(row, prefix + "_team", Boolean.class));
        entity.setStart(converter.fromRow(row, prefix + "_start", Instant.class));
        entity.setEnd(converter.fromRow(row, prefix + "_jhi_end", Instant.class));
        entity.setMatchId(converter.fromRow(row, prefix + "_match_id", Long.class));
        entity.setUserId(converter.fromRow(row, prefix + "_user_id", Long.class));
        return entity;
    }
}
