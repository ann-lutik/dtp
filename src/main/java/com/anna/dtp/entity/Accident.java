package com.anna.dtp.entity;
import javax.persistence.*;
import java.util.Date;
import java.util.List;
@Entity
@Table(name = "accident")
public class Accident {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code_accident")
    private long codeAccident;
    @Column(name = "date_accident")
    @Temporal(TemporalType.DATE)
    private Date dateAccident;
    @Column(name = "type_accident")
    private String typeAccident;
    @Column(name = "death_toll")
    private Integer deathToll;
    @Column(name = "number_of_victims")
    private Integer numberOfVictims;
    @Column(name = "weather")
    private String weather;
    @Column(name = "type_of_coating")
    private String typeOfCoating;
    @Column(name = "view_road_construction")
    private String viewRoadConstruction;

    @OneToMany(targetEntity = Car.class, cascade = CascadeType.ALL, mappedBy = "accident")
    private List<Car> car;

    @OneToMany(targetEntity = RoadAccidentParticipant.class, cascade = CascadeType.ALL, mappedBy = "accident")
    private List<RoadAccidentParticipant> roadAccidentParticipants;

    public Accident() {
    }

    public Accident(Date dateAccident, String typeAccident, Integer deathToll, Integer numberOfVictims, String weather, String typeOfCoating, String viewRoadConstruction) {
        this.dateAccident = dateAccident;
        this.typeAccident = typeAccident;
        this.deathToll = deathToll;
        this.numberOfVictims = numberOfVictims;
        this.weather = weather;
        this.typeOfCoating = typeOfCoating;
        this.viewRoadConstruction = viewRoadConstruction;
    }

    public long getCodeAccident() {
        return codeAccident;
    }

    public void setCodeAccident(long codeAccident) {
        this.codeAccident = codeAccident;
    }

    public Date getDateAccident() {
        return dateAccident;
    }

    public void setDateAccident(Date dateAccident) {
        this.dateAccident = dateAccident;
    }

    public String getTypeAccident() {
        return typeAccident;
    }

    public void setTypeAccident(String typeAccident) {
        this.typeAccident = typeAccident;
    }

    public Integer getDeathToll() {
        return deathToll;
    }

    public void setDeathToll(Integer deathToll) {
        this.deathToll = deathToll;
    }

    public Integer getNumberOfVictims() {
        return numberOfVictims;
    }

    public void setNumberOfVictims(Integer numberOfVictims) {
        this.numberOfVictims = numberOfVictims;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public String getTypeOfCoating() {
        return typeOfCoating;
    }

    public void setTypeOfCoating(String typeOfCoating) {
        this.typeOfCoating = typeOfCoating;
    }

    public String getViewRoadConstruction() {
        return viewRoadConstruction;
    }

    public void setViewRoadConstruction(String viewRoadConstruction) {
        this.viewRoadConstruction = viewRoadConstruction;
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
        return "Accident{"+
                "id="+ codeAccident +
                ", date='" + dateAccident + '\'' +
                ", type='" + typeAccident + '\'' +
                '}';
    }
}
