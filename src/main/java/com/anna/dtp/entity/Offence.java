package com.anna.dtp.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "offence")
public class Offence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code_offence")
    private Long codeOffence;

    @Column(name = "name_offence")
    private String nameOffence;

    @OneToMany(targetEntity = RoadAccidentParticipant.class, cascade = CascadeType.ALL, mappedBy = "offence")
    private List<RoadAccidentParticipant> roadAccidentParticipants;

    public Offence() {
    }

    public Offence(String nameOffence) {
        this.nameOffence = nameOffence;
    }

    public long getCodeOffence() {
        return codeOffence;
    }

    public void setCodeOffence(long codeOffence) {
        this.codeOffence = codeOffence;
    }

    public String getNameOffence() {
        return nameOffence;
    }

    public void setNameOffence(String nameOffence) {
        this.nameOffence = nameOffence;
    }

    public List<RoadAccidentParticipant> getRoadAccidentParticipants() {
        return roadAccidentParticipants;
    }

    public void setRoadAccidentParticipants(List<RoadAccidentParticipant> roadAccidentParticipants) {
        this.roadAccidentParticipants = roadAccidentParticipants;
    }

    @Override
    public String toString() {
        return "Offence{" +
                "id=" + codeOffence +
                ", name='" + nameOffence + '\'' +
                '}';
    }
}
