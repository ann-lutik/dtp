package com.anna.dtp.repository;

import com.anna.dtp.entity.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person, Long> {
}
