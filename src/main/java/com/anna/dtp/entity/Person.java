package com.anna.dtp.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "person")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_person")
    private Long idPerson;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    //otchestvo
    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "date_birth")
    @Temporal(TemporalType.DATE)
    private Date dateBirth;

    @Column(name = "address_person")
    private String addressPerson;

    @Column(name = "role")
    private String role;

    @Column(name = "password")
    private String password;

    @OneToMany(targetEntity = Car.class, cascade = CascadeType.ALL, mappedBy = "person")
    private List<Car> car;

    @OneToMany(targetEntity = RoadAccidentParticipant.class, cascade = CascadeType.ALL, mappedBy = "person")
    private List<RoadAccidentParticipant> roadAccidentParticipants;

    public Person() {
    }

    public Person(String name, String surname, String middleName, Date dateBirth, String addressPerson, String role, String password) {
        this.name = name;
        this.surname = surname;
        this.middleName = middleName;
        this.dateBirth = dateBirth;
        this.addressPerson = addressPerson;
        this.role = role;
        this.password = password;
    }

    public long getIdPerson() {
        return idPerson;
    }

    public void setIdPerson(long idPerson) {
        this.idPerson = idPerson;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public Date getDateBirth() {
        return dateBirth;
    }

    public void setDateBirth(Date dateBirth) {
        this.dateBirth = dateBirth;
    }

    public String getAddressPerson() {
        return addressPerson;
    }

    public void setAddressPerson(String addressPerson) {
        this.addressPerson = addressPerson;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Car> getCar() {
        return car;
    }

    public void setCar(List<Car> car) {
        this.car = car;
    }

    public List<RoadAccidentParticipant> getRoadAccidentParticipants() {
        return roadAccidentParticipants;
    }

    public void setRoadAccidentParticipants(List<RoadAccidentParticipant> roadAccidentParticipants) {
        this.roadAccidentParticipants = roadAccidentParticipants;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + idPerson +
                ", name='" + name + '\'' +
                '}';
    }
}
