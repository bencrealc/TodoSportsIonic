package com.todosports.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.todosports.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class PosesionTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Posesion.class);
        Posesion posesion1 = new Posesion();
        posesion1.setId(1L);
        Posesion posesion2 = new Posesion();
        posesion2.setId(posesion1.getId());
        assertThat(posesion1).isEqualTo(posesion2);
        posesion2.setId(2L);
        assertThat(posesion1).isNotEqualTo(posesion2);
        posesion1.setId(null);
        assertThat(posesion1).isNotEqualTo(posesion2);
    }
}
