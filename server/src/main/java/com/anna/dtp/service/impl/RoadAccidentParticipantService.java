package com.anna.dtp.service.impl;

import com.anna.dtp.entity.RoadAccidentParticipant;
import com.anna.dtp.repository.RoadAccidentParticipantRepository;
import com.anna.dtp.service.EntityService;
import com.anna.dtp.util.CollectionUtil;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoadAccidentParticipantService implements EntityService<RoadAccidentParticipant> {

    @Autowired
    private RoadAccidentParticipantRepository roadAccidentParticipantRepository;

    @Override
    public List<RoadAccidentParticipant> readAll() {
        return CollectionUtil.iterableToList(roadAccidentParticipantRepository.findAll());
    }

    @Override
    @Nullable
    public RoadAccidentParticipant read(Long id) {
        return roadAccidentParticipantRepository.findOne(id);
    }

    @Override
    public void createOrUpdate(RoadAccidentParticipant roadAccidentParticipant) {
        roadAccidentParticipantRepository.save(roadAccidentParticipant);
    }

    @Override
    public void remove(Long id) {
        RoadAccidentParticipant roadAccidentParticipant = read(id);
        if (roadAccidentParticipant != null) {
            roadAccidentParticipantRepository.delete(roadAccidentParticipant);
        }
    }

}
