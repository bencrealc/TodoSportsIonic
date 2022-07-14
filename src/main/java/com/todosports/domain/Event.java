package com.todosports.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.todosports.domain.enumeration.EventType;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * A Event.
 */
@Table("event")
public class Event implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column("id")
    private Long id;

    @Column("event_type")
    private EventType eventType;

    @Column("team")
    private Boolean team;

    @Transient
    @JsonIgnoreProperties(value = { "event", "posesion" }, allowSetters = true)
    private Set<Match> matches = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Event id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EventType getEventType() {
        return this.eventType;
    }

    public Event eventType(EventType eventType) {
        this.setEventType(eventType);
        return this;
    }

    public void setEventType(EventType eventType) {
        this.eventType = eventType;
    }

    public Boolean getTeam() {
        return this.team;
    }

    public Event team(Boolean team) {
        this.setTeam(team);
        return this;
    }

    public void setTeam(Boolean team) {
        this.team = team;
    }

    public Set<Match> getMatches() {
        return this.matches;
    }

    public void setMatches(Set<Match> matches) {
        if (this.matches != null) {
            this.matches.forEach(i -> i.setEvent(null));
        }
        if (matches != null) {
            matches.forEach(i -> i.setEvent(this));
        }
        this.matches = matches;
    }

    public Event matches(Set<Match> matches) {
        this.setMatches(matches);
        return this;
    }

    public Event addMatch(Match match) {
        this.matches.add(match);
        match.setEvent(this);
        return this;
    }

    public Event removeMatch(Match match) {
        this.matches.remove(match);
        match.setEvent(null);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Event)) {
            return false;
        }
        return id != null && id.equals(((Event) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Event{" +
            "id=" + getId() +
            ", eventType='" + getEventType() + "'" +
            ", team='" + getTeam() + "'" +
            "}";
    }
}
