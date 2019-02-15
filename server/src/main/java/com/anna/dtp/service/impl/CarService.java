package com.anna.dtp.service.impl;

import com.anna.dtp.entity.Car;
import com.anna.dtp.repository.CarRepository;
import com.anna.dtp.service.EntityService;
import com.anna.dtp.util.CollectionUtil;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService implements EntityService<Car> {

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<Car> readAll() {
        return CollectionUtil.iterableToList(carRepository.findAll());
    }

    @Override
    @Nullable
    public Car read(Long id) {
        return carRepository.findOne(id);
    }

    @Override
    public void createOrUpdate(Car car) {
        carRepository.save(car);
    }

    @Override
    public void remove(Long id) {
        Car car = read(id);
        if (car != null) {
            carRepository.delete(car);
        }
    }

}
