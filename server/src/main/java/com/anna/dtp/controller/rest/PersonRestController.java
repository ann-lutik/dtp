package com.anna.dtp.controller.rest;
import com.anna.dtp.DAO;
import com.anna.dtp.entity.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class PersonRestController {
    @Autowired
    private DAO<Person> DAO_PERSON;

    @RequestMapping(value = "/rest/persons", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Person> getPersons() {
        return DAO_PERSON.readAll(Person.class);
    }

    @RequestMapping(value = "/rest/persons/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Person> getPerson(@PathVariable("id") Long id) {
        Person person = DAO_PERSON.read(Person.class, id);
        if (person == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(person, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/rest/persons", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        DAO_PERSON.createOrUpdate(person);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/persons/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Person> updatePerson(@PathVariable("id") Long id, @RequestBody Person person) {
        person.setIdPerson(id);
        DAO_PERSON.createOrUpdate(person);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/persons/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Person> deletePerson(@PathVariable("id") Long id) {
        Person person = DAO_PERSON.read(Person.class, id);
        if (person == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            DAO_PERSON.remove(person);
            return new ResponseEntity<>(person, HttpStatus.OK);
        }
    }
}
