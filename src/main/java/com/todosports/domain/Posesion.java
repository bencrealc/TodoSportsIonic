package com.todosports.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
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
    @JsonIgnoreProperties(value = { "event", "posesion" }, allowSetters = true)
    private Set<Match> matches = new HashSet<>();

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

    public Set<Match> getMatches() {
        return this.matches;
    }

    public void setMatches(Set<Match> matches) {
        if (this.matches != null) {
            this.matches.forEach(i -> i.setPosesion(null));
        }
        if (matches != null) {
            matches.forEach(i -> i.setPosesion(this));
        }
        this.matches = matches;
    }

    public Posesion matches(Set<Match> matches) {
        this.setMatches(matches);
        return this;
    }

    public Posesion addMatch(Match match) {
        this.matches.add(match);
        match.setPosesion(this);
        return this;
    }

    public Posesion removeMatch(Match match) {
        this.matches.remove(match);
        match.setPosesion(null);
        return this;
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
