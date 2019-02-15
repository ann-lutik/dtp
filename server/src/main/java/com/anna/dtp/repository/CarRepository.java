package com.anna.dtp.repository;

import com.anna.dtp.entity.Car;
import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository<Car, Long> {
}
