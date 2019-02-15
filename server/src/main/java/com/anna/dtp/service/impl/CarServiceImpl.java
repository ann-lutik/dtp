package com.anna.dtp.service.impl;

import com.anna.dtp.repository.CarRepository;
import com.anna.dtp.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;

public class CarServiceImpl implements CarService {

    @Autowired
    CarRepository carRepository;

}
