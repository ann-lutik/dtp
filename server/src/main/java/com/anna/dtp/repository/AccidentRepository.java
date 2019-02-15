package com.anna.dtp.repository;

import com.anna.dtp.entity.Accident;
import org.springframework.data.repository.CrudRepository;

public interface AccidentRepository extends CrudRepository<Accident, Long> {
}
