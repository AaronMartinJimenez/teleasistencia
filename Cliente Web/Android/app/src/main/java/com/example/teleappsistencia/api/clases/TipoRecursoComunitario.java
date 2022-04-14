package com.example.teleappsistencia.api.clases;

import com.google.gson.annotations.SerializedName;

public class TipoRecursoComunitario {

    @SerializedName("pk")
    private int pk;
    @SerializedName("name")
    private String name;

    public int getPk() {
        return pk;
    }

    public void setPk(int pk) {
        this.pk = pk;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "TipoRecursoComunitario{" +
                "pk=" + pk +
                ", name='" + name + '\'' +
                '}';
    }
}
