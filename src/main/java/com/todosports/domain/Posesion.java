package com.todosports.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Instant;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * A Posesion.
 */
@Table("posesion")
public class Posesion implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column("id")
    private Long id;

    @Column("team")
    private Boolean team;

    @Column("start")
    private Instant start;

    @Column("jhi_end")
    private Instant end;

    @Transient
    @JsonIgnoreProperties(value = { "events", "posesions", "teams" }, allowSetters = true)
    private Match match;

    @Column("match_id")
    private Long matchId;

    @Column("user_id")
    private Long userId;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Posesion id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getTeam() {
        return this.team;
    }

    public Posesion team(Boolean team) {
        this.setTeam(team);
        return this;
    }

    public void setTeam(Boolean team) {
        this.team = team;
    }

    public Instant getStart() {
        return this.start;
    }

    public Posesion start(Instant start) {
        this.setStart(start);
        return this;
    }

    public void setStart(Instant start) {
        this.start = start;
    }

    public Instant getEnd() {
        return this.end;
    }

    public Posesion end(Instant end) {
        this.setEnd(end);
        return this;
    }

    public void setEnd(Instant end) {
        this.end = end;
    }

    public Match getMatch() {
        return this.match;
    }

    public void setMatch(Match match) {
        this.match = match;
        this.matchId = match != null ? match.getId() : null;
    }

    public Posesion match(Match match) {
        this.setMatch(match);
        return this;
    }

    public Long getMatchId() {
        return this.matchId;
    }

    public void setMatchId(Long match) {
        this.matchId = match;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Posesion)) {
            return false;
        }
        return id != null && id.equals(((Posesion) o).id);
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Posesion{" +
            "id=" + getId() +
            ", team='" + getTeam() + "'" +
            ", start='" + getStart() + "'" +
            ", end='" + getEnd() + "'" +
            "}";
    }
}
