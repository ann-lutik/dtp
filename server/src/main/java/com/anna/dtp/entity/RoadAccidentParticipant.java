package com.anna.dtp.entity;

import org.apache.openjpa.persistence.jdbc.ForeignKey;

import javax.persistence.*;

@Entity
@Table(name = "road_accident_participant")
public class RoadAccidentParticipant implements Identifiable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code_road_accident_participant")
    private Long codeRoadAccidentParticipant;

    @Column(name = "drivers_license_number")
    private String driversLicenseNumber;

    @Column(name = "type_participation")
    private String typeParticipation;

    @Column(name = "driving_experience")
    private String drivingExperience;

    @Column(name = "is_guilty")
    private String isGuilty;

    @ManyToOne(targetEntity = Person.class)
    @JoinColumn(name = "id_person")
    @ForeignKey
    private Person person;

    @ManyToOne(targetEntity = Accident.class)
    @JoinColumn(name = "code_accident")
    @ForeignKey
    private Accident accident;

    @ManyToOne(targetEntity = Offence.class)
    @JoinColumn(name = "code_offence")
    @ForeignKey
    private Offence offence;

    public RoadAccidentParticipant() {
    }

    public RoadAccidentParticipant(String driversLicenseNumber, String typeParticipation, String drivingExperience, String isGuilty, Person person, Accident accident, Offence offence) {
        this.driversLicenseNumber = driversLicenseNumber;
        this.typeParticipation = typeParticipation;
        this.drivingExperience = drivingExperience;
        this.isGuilty = isGuilty;
        this.person = person;
        this.accident = accident;
        this.offence = offence;
    }

    public long getCodeRoadAccidentParticipant() {
        return codeRoadAccidentParticipant;
    }

    public void setCodeRoadAccidentParticipant(long codeRoadAccidentParticipant) {
        this.codeRoadAccidentParticipant = codeRoadAccidentParticipant;
    }

    public String getDriversLicenseNumber() {
        return driversLicenseNumber;
    }

    public void setDriversLicenseNumber(String driversLicenseNumber) {
        this.driversLicenseNumber = driversLicenseNumber;
    }

    public String getTypeParticipation() {
        return typeParticipation;
    }

    public void setTypeParticipation(String typeParticipation) {
        this.typeParticipation = typeParticipation;
    }

    public String getDrivingExperience() {
        return drivingExperience;
    }

    public void setDrivingExperience(String drivingExperience) {
        this.drivingExperience = drivingExperience;
    }

    public String getIsGuilty() {
        return isGuilty;
    }

    public void setIsGuilty(String isGuilty) {
        this.isGuilty = isGuilty;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Accident getAccident() {
        return accident;
    }

    public void setAccident(Accident accident) {
        this.accident = accident;
    }

    public Offence getOffence() {
        return offence;
    }

    public void setOffence(Offence offence) {
        this.offence = offence;
    }

    @Override
    public String toString() {
        return "Road Accident Participant{" +
                "id=" + codeRoadAccidentParticipant +
                ", License Number='" + driversLicenseNumber + '\'' +
                '}';
    }

    @Override
    public Long getId() {
        return codeRoadAccidentParticipant;
    }

}
