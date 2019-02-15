package com.anna.dtp.controller.rest;

import com.anna.dtp.entity.Offence;
import com.anna.dtp.service.impl.OffenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class OffenceRestController {

    @Autowired
    private OffenceService offenceService;

    @RequestMapping(value = "/offences", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Offence> getOffences() {
        return offenceService.readAll();
    }

    @RequestMapping(value = "/offences/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Offence> getOffence(@PathVariable("id") Long id) {
        Offence offence = offenceService.read(id);
        if (offence == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(offence, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/offences", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Offence> createOffence(@RequestBody Offence offence) {
        offenceService.createOrUpdate(offence);
        return new ResponseEntity<>(offence, HttpStatus.OK);
    }

    @RequestMapping(value = "/offences/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Offence> updateOffence(@PathVariable("id") Long id, @RequestBody Offence offence) {
        offence.setCodeOffence(id);
        offenceService.createOrUpdate(offence);
        return new ResponseEntity<>(offence, HttpStatus.OK);
    }

    @RequestMapping(value = "/offences/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Offence> deleteOffence(@PathVariable("id") Long id) {
        Offence offence = offenceService.read(id);
        if (offence == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            offenceService.remove(id);
            return new ResponseEntity<>(offence, HttpStatus.OK);
        }
    }

}
