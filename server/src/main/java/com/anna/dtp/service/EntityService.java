package com.anna.dtp.service;

import com.anna.dtp.entity.Identifiable;

import java.util.List;

public interface EntityService<T extends Identifiable> {

    List<T> readAll();

    T read(Long id);

    void createOrUpdate(T t);

    void remove(Long id);

}
