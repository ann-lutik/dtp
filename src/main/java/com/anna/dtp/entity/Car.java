package com.anna.dtp.entity;

import org.apache.openjpa.persistence.jdbc.ForeignKey;

import javax.persistence.*;

@Entity
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code_car")
    private Long codeCar;

    @Column(name = "vin")
    private String vin;

    @Column(name = "government_number")
    private String governmentNumber;

    @Column(name = "car_brand")
    private String car_brand;

    @Column(name = "model")
    private String model;

    @Column(name = "category")
    private String category;

    @Column(name = "color")
    private String color;

    @ManyToOne(targetEntity = Person.class)
    @JoinColumn(name = "id_person")
    @ForeignKey
    private Person person;

    @ManyToOne(targetEntity = Accident.class)
    @JoinColumn(name = "code_accident")
    @ForeignKey
    private Accident accident;

    public Car() {
    }

    public Car(String vin, String governmentNumber, String car_brand, String model, String category, String color, Person person, Accident accident) {
        this.vin = vin;
        this.governmentNumber = governmentNumber;
        this.car_brand = car_brand;
        this.model = model;
        this.category = category;
        this.color = color;
        this.person = person;
        this.accident = accident;
    }

    public long getCodeCar() {
        return codeCar;
    }

    public void setCodeCar(long codeCar) {
        this.codeCar = codeCar;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getGovernmentNumber() {
        return governmentNumber;
    }

    public void setGovernmentNumber(String governmentNumber) {
        this.governmentNumber = governmentNumber;
    }

    public String getCar_brand() {
        return car_brand;
    }

    public void setCar_brand(String car_brand) {
        this.car_brand = car_brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
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

    @Override
    public String toString() {
        return "Car{" +
                "id=" + codeCar +
                ", vin='" + vin + '\'' +
                '}';
    }
}
