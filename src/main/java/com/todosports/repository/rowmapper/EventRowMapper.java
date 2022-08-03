package com.todosports.repository.rowmapper;

import com.todosports.domain.Event;
import com.todosports.domain.enumeration.EventType;
import io.r2dbc.spi.Row;
import java.util.function.BiFunction;
import org.springframework.stereotype.Service;

/**
 * Converter between {@link Row} to {@link Event}, with proper type conversions.
 */
@Service
public class EventRowMapper implements BiFunction<Row, String, Event> {

    private final ColumnConverter converter;

    public EventRowMapper(ColumnConverter converter) {
        this.converter = converter;
    }

    /**
     * Take a {@link Row} and a column prefix, and extract all the fields.
     * @return the {@link Event} stored in the database.
     */
    @Override
    public Event apply(Row row, String prefix) {
        Event entity = new Event();
        entity.setId(converter.fromRow(row, prefix + "_id", Long.class));
        entity.setEventType(converter.fromRow(row, prefix + "_event_type", EventType.class));
        entity.setTeam(converter.fromRow(row, prefix + "_team", Boolean.class));
        entity.setMatchId(converter.fromRow(row, prefix + "_match_id", Long.class));
        return entity;
    }
}
