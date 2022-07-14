package com.todosports.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.Serializable;
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

    @Column("local")
    private String local;

    @Column("away")
    private String away;

    @Transient
    @JsonIgnoreProperties(value = { "matches" }, allowSetters = true)
    private Event event;

    @Transient
    @JsonIgnoreProperties(value = { "matches" }, allowSetters = true)
    private Posesion posesion;

    @Column("event_id")
    private Long eventId;

    @Column("posesion_id")
    private Long posesionId;

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

    public String getLocal() {
        return this.local;
    }

    public Match local(String local) {
        this.setLocal(local);
        return this;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getAway() {
        return this.away;
    }

    public Match away(String away) {
        this.setAway(away);
        return this;
    }

    public void setAway(String away) {
        this.away = away;
    }

    public Event getEvent() {
        return this.event;
    }

    public void setEvent(Event event) {
        this.event = event;
        this.eventId = event != null ? event.getId() : null;
    }

    public Match event(Event event) {
        this.setEvent(event);
        return this;
    }

    public Posesion getPosesion() {
        return this.posesion;
    }

    public void setPosesion(Posesion posesion) {
        this.posesion = posesion;
        this.posesionId = posesion != null ? posesion.getId() : null;
    }

    public Match posesion(Posesion posesion) {
        this.setPosesion(posesion);
        return this;
    }

    public Long getEventId() {
        return this.eventId;
    }

    public void setEventId(Long event) {
        this.eventId = event;
    }

    public Long getPosesionId() {
        return this.posesionId;
    }

    public void setPosesionId(Long posesion) {
        this.posesionId = posesion;
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
            ", local='" + getLocal() + "'" +
            ", away='" + getAway() + "'" +
            "}";
    }
}
