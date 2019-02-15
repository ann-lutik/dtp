package com.anna.dtp.controller.rest;
import com.anna.dtp.DAO;
import com.anna.dtp.entity.Offence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OffenceRestController {
    @Autowired
    private DAO<Offence> DAO_OFFENCE;

    @RequestMapping(value = "/rest/offences", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Offence> getOffences() {
        return DAO_OFFENCE.readAll(Offence.class);
    }

    @RequestMapping(value = "/rest/offences/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Offence> getOffence(@PathVariable("id") Long id) {
        Offence offence = DAO_OFFENCE.read(Offence.class, id);
        if (offence == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(offence, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/rest/offences", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Offence> createOffence(@RequestBody Offence offence) {
        DAO_OFFENCE.createOrUpdate(offence);
        return new ResponseEntity<>(offence, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/offences/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Offence> updateOffence(@PathVariable("id") Long id, @RequestBody Offence offence) {
        offence.setCodeOffence(id);
        DAO_OFFENCE.createOrUpdate(offence);
        return new ResponseEntity<>(offence, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/offences/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Offence> deleteOffence(@PathVariable("id") Long id) {
        Offence offence = DAO_OFFENCE.read(Offence.class, id);
        if (offence == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            DAO_OFFENCE.remove(offence);
            return new ResponseEntity<>(offence, HttpStatus.OK);
        }
    }
}
