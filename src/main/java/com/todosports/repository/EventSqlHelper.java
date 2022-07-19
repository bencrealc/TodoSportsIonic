package com.todosports.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.relational.core.sql.Column;
import org.springframework.data.relational.core.sql.Expression;
import org.springframework.data.relational.core.sql.Table;

public class EventSqlHelper {

    public static List<Expression> getColumns(Table table, String columnPrefix) {
        List<Expression> columns = new ArrayList<>();
        columns.add(Column.aliased("id", table, columnPrefix + "_id"));
        columns.add(Column.aliased("event_type", table, columnPrefix + "_event_type"));
        columns.add(Column.aliased("team", table, columnPrefix + "_team"));

        columns.add(Column.aliased("match_id", table, columnPrefix + "_match_id"));
        return columns;
    }
}
