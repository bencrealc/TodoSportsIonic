package com.todosports.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * Task entity.\n@author The JHipster team.
 */
@Schema(description = "Task entity.\n@author The JHipster team.")
@Table("match")
public class Match implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column("id")
    private Long id;

    @Transient
    @JsonIgnoreProperties(value = { "teams" }, allowSetters = true)
    private Team local;

    @Column("local_id")
    private String localId;

    @Transient
    @JsonIgnoreProperties(value = { "teams" }, allowSetters = true)
    private Team away;

    @Column("away_id")
    private String awayId;

    @Column("match_day")
    private Instant matchDay;

    @Transient
    @JsonIgnoreProperties(value = { "match" }, allowSetters = true)
    private Set<Event> events = new HashSet<>();

    @Transient
    @JsonIgnoreProperties(value = { "match" }, allowSetters = true)
    private Set<Posesion> posesions = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Match id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Team getLocal() {
        return this.local;
    }

    public void setLocal(Team local) {
        this.local = local;
        this.localId = local != null ? local.getName() : null;
    }

    public Match local(Team local) {
        this.setLocal(local);
        return this;
    }

    public String getLocalId() {
        return this.localId;
    }

    public Match localId(String localId) {
        this.setLocalId(localId);
        return this;
    }

    public void setLocalId(String localId) {
        this.localId = localId;
    }

    public Team getAway() {
        return this.away;
    }

    public void setAway(Team away) {
        this.away = away;
        this.awayId = away != null ? away.getName() : null;
    }

    public Match away(Team away) {
        this.setAway(away);
        return this;
    }

    public String getAwayId() {
        return this.awayId;
    }

    public Match awayId(String awayId) {
        this.setAwayId(awayId);
        return this;
    }

    public void setAwayId(String awayId) {
        this.awayId = awayId;
    }

    public Instant getMatchDay() {
        return this.matchDay;
    }

    public Match matchDay(Instant matchDay) {
        this.setMatchDay(matchDay);
        return this;
    }

    public void setMatchDay(Instant matchDay) {
        this.matchDay = matchDay;
    }

    public Set<Event> getEvents() {
        return this.events;
    }

    public void setEvents(Set<Event> events) {
        if (this.events != null) {
            this.events.forEach(i -> i.setMatch(null));
        }
        if (events != null) {
            events.forEach(i -> i.setMatch(this));
        }
        this.events = events;
    }

    public Match events(Set<Event> events) {
        this.setEvents(events);
        return this;
    }

    public Match addEvent(Event event) {
        this.events.add(event);
        event.setMatch(this);
        return this;
    }

    public Match removeEvent(Event event) {
        this.events.remove(event);
        event.setMatch(null);
        return this;
    }

    public Set<Posesion> getPosesions() {
        return this.posesions;
    }

    public void setPosesions(Set<Posesion> posesions) {
        if (this.posesions != null) {
            this.posesions.forEach(i -> i.setMatch(null));
        }
        if (posesions != null) {
            posesions.forEach(i -> i.setMatch(this));
        }
        this.posesions = posesions;
    }

    public Match posesions(Set<Posesion> posesions) {
        this.setPosesions(posesions);
        return this;
    }

    public Match addPosesion(Posesion posesion) {
        this.posesions.add(posesion);
        posesion.setMatch(this);
        return this;
    }

    public Match removePosesion(Posesion posesion) {
        this.posesions.remove(posesion);
        posesion.setMatch(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Match)) {
            return false;
        }
        return id != null && id.equals(((Match) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Match{" +
            "id=" + getId() +
            ", local='" + getLocalId() + "'" +
            ", away='" + getAwayId() + "'" +
            ", matchDay='" + getMatchDay() + "'" +
            "}";
    }
}
