package com.anna.dtp.service.impl;

import com.anna.dtp.entity.Accident;
import com.anna.dtp.repository.AccidentRepository;
import com.anna.dtp.service.EntityService;
import com.anna.dtp.util.CollectionUtil;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccidentService implements EntityService<Accident> {

    @Autowired
    private AccidentRepository accidentRepository;

    @Override
    public List<Accident> readAll() {
        return CollectionUtil.iterableToList(accidentRepository.findAll());
    }

    @Override
    @Nullable
    public Accident read(Long id) {
        return accidentRepository.findOne(id);
    }

    @Override
    public void createOrUpdate(Accident accident) {
        accidentRepository.save(accident);
    }

    @Override
    public void remove(Long id) {
        Accident accident = read(id);
        if (accident != null) {
            accidentRepository.delete(accident);
        }
    }

}
