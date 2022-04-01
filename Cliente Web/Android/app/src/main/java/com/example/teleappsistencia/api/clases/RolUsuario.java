package com.example.teleappsistencia.api.clases;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class RolUsuario{

    /**
     * Atributos de la clase
     */
    @SerializedName("pk")
    private int pk;

    @SerializedName("name")
    private String name;

    /**
     * Getters y setters
     */
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

}