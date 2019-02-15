package com.anna.dtp.service.impl;

import com.anna.dtp.entity.Offence;
import com.anna.dtp.repository.OffenceRepository;
import com.anna.dtp.service.EntityService;
import com.anna.dtp.util.CollectionUtil;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OffenceService implements EntityService<Offence> {

    @Autowired
    private OffenceRepository offenceRepository;

    @Override
    public List<Offence> readAll() {
        return CollectionUtil.iterableToList(offenceRepository.findAll());
    }

    @Override
    @Nullable
    public Offence read(Long id) {
        return offenceRepository.findOne(id);
    }

    @Override
    public void createOrUpdate(Offence offence) {
        offenceRepository.save(offence);
    }

    @Override
    public void remove(Long id) {
        Offence offence = read(id);
        if (offence != null) {
            offenceRepository.delete(offence);
        }
    }

}
