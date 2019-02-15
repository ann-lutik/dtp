package com.anna.dtp.controller.rest;

import com.anna.dtp.entity.Car;
import com.anna.dtp.service.EntityService;
import com.anna.dtp.service.impl.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class CarRestController {

    @Autowired
    private CarService carService;

    @RequestMapping(value = "/cars", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Car> getCars() {
        return carService.readAll();
    }

    @RequestMapping(value = "/cars/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Car> getCar(@PathVariable("id") Long id) {
        Car car = carService.read(id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(car, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/cars", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        carService.createOrUpdate(car);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @RequestMapping(value = "/cars/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Car> updateCar(@PathVariable("id") Long id, @RequestBody Car car) {
        car.setCodeCar(id);
        carService.createOrUpdate(car);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @RequestMapping(value = "/cars/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Car> deleteCar(@PathVariable("id") Long id) {
        Car car = carService.read(id);
        if (car == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            carService.remove(id);
            return new ResponseEntity<>(car, HttpStatus.OK);
        }
    }

}
