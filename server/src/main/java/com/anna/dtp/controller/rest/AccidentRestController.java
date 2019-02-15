package com.anna.dtp.controller.rest;

import com.anna.dtp.entity.Accident;
import com.anna.dtp.service.impl.AccidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class AccidentRestController {

    @Autowired
    private AccidentService accidentService;

    @RequestMapping(value = "/accidents", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Accident> getAccidents() {
        return accidentService.readAll();
    }

    @RequestMapping(value = "/accidents/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Accident> getAccident(@PathVariable("id") Long id) {
        Accident accident = accidentService.read(id);
        if (accident == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(accident, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/accidents", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Accident> createAccident(@RequestBody Accident accident) {
        accidentService.createOrUpdate(accident);
        return new ResponseEntity<>(accident, HttpStatus.OK);
    }

    @RequestMapping(value = "/accidents/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Accident> updateAccident(@PathVariable("id") Long id, @RequestBody Accident accident) {
        accident.setCodeAccident(id);
        accidentService.createOrUpdate(accident);
        return new ResponseEntity<>(accident, HttpStatus.OK);
    }

    @RequestMapping(value = "/accidents/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Accident> deleteAccident(@PathVariable("id") Long id) {
        Accident accident = accidentService.read(id);
        if (accident == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            accidentService.remove(id);
            return new ResponseEntity<>(accident, HttpStatus.OK);
        }
    }

}
