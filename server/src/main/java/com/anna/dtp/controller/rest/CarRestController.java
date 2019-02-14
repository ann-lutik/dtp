package com.anna.dtp.controller.rest;

import com.anna.dtp.DAO;
import com.anna.dtp.entity.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarRestController {

    @Autowired
    private DAO<Car> DAO_CAR;

    @RequestMapping(value = "/rest/cars", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Car> getCars() {
        return DAO_CAR.readAll(Car.class);
    }

    @RequestMapping(value = "/rest/cars/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Car> getCar(@PathVariable("id") Long id) {
        Car car = DAO_CAR.read(Car.class, id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(car, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/rest/cars", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        DAO_CAR.createOrUpdate(car);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/cars/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Car> updateCar(@PathVariable("id") Long id, @RequestBody Car car) {
        car.setCodeCar(id);
        DAO_CAR.createOrUpdate(car);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/cars/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Car> updateCar(@PathVariable("id") Long id) {
        Car car = DAO_CAR.read(Car.class, id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            DAO_CAR.remove(car);
            return new ResponseEntity<>(car, HttpStatus.OK);
        }
    }

}
