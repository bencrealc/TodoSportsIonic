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

    @Column("paused")
    private Boolean paused;

    @Column("time")
    private Instant time;

    @Transient
    @JsonIgnoreProperties(value = { "events", "posesions" }, allowSetters = true)
    private Match match;

    @Column("match_id")
    private Long matchId;

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

    public Boolean getPaused() {
        return this.paused;
    }

    public Posesion paused(Boolean paused) {
        this.setPaused(paused);
        return this;
    }

    public void setPaused(Boolean paused) {
        this.paused = paused;
    }

    public Instant getTime() {
        return this.time;
    }

    public Posesion time(Instant time) {
        this.setTime(time);
        return this;
    }

    public void setTime(Instant time) {
        this.time = time;
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
            ", paused='" + getPaused() + "'" +
            ", time='" + getTime() + "'" +
            "}";
    }
}
