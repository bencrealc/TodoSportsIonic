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
        columns.add(Column.aliased("local_id", table, columnPrefix + "_local_id"));
        columns.add(Column.aliased("away_id", table, columnPrefix + "_away_id"));
        columns.add(Column.aliased("match_day", table, columnPrefix + "_match_day"));

        return columns;
    }
}
