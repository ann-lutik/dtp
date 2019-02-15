package com.anna.dtp.service.impl;

import com.anna.dtp.entity.Person;
import com.anna.dtp.repository.PersonRepository;
import com.anna.dtp.service.EntityService;
import com.anna.dtp.util.CollectionUtil;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService implements EntityService<Person> {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public List<Person> readAll() {
        return CollectionUtil.iterableToList(personRepository.findAll());
    }

    @Override
    @Nullable
    public Person read(Long id) {
        return personRepository.findOne(id);
    }

    @Override
    public void createOrUpdate(Person person) {
        personRepository.save(person);
    }

    @Override
    public void remove(Long id) {
        Person person = read(id);
        if (person != null) {
            personRepository.delete(person);
        }
    }

}
