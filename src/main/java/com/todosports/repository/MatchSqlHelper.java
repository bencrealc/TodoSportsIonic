package com.todosports.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.relational.core.sql.Column;
import org.springframework.data.relational.core.sql.Expression;
import org.springframework.data.relational.core.sql.Table;

public class MatchSqlHelper {

    public static List<Expression> getColumns(Table table, String columnPrefix) {
        List<Expression> columns = new ArrayList<>();
        columns.add(Column.aliased("id", table, columnPrefix + "_id"));
        columns.add(Column.aliased("local", table, columnPrefix + "_local"));
        columns.add(Column.aliased("away", table, columnPrefix + "_away"));

        columns.add(Column.aliased("event_id", table, columnPrefix + "_event_id"));
        columns.add(Column.aliased("posesion_id", table, columnPrefix + "_posesion_id"));
        return columns;
    }
}