package com.anna.dtp.controller.rest;

import com.anna.dtp.entity.Person;
import com.anna.dtp.service.impl.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class PersonRestController {

    @Autowired
    private PersonService personService;

    @RequestMapping(value = "/persons", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Person> getPersons() {
        return personService.readAll();
    }

    @RequestMapping(value = "/persons/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Person> getPerson(@PathVariable("id") Long id) {
        Person person = personService.read(id);
        if (person == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(person, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/persons", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        personService.createOrUpdate(person);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @RequestMapping(value = "/persons/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Person> updatePerson(@PathVariable("id") Long id, @RequestBody Person person) {
        person.setIdPerson(id);
        personService.createOrUpdate(person);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @RequestMapping(value = "/persons/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Person> deletePerson(@PathVariable("id") Long id) {
        Person person = personService.read(id);
        if (person == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            personService.remove(id);
            return new ResponseEntity<>(person, HttpStatus.OK);
        }
    }

}
