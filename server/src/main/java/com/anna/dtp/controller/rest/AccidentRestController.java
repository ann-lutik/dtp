package com.anna.dtp.controller.rest;
import com.anna.dtp.DAO;
import com.anna.dtp.entity.Accident;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class AccidentRestController {
    @Autowired
    private DAO<Accident> DAO_ACCIDENT;

    @RequestMapping(value = "/rest/accidents", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Accident> getAccidents() {
        return DAO_ACCIDENT.readAll(Accident.class);
    }

    @RequestMapping(value = "/rest/accidents/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Accident> getAccident(@PathVariable("id") Long id) {
        Accident accident = DAO_ACCIDENT.read(Accident.class, id);
        if (accident == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(accident, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/rest/accidents", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Accident> createAccident(@RequestBody Accident accident) {
        DAO_ACCIDENT.createOrUpdate(accident);
        return new ResponseEntity<>(accident, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/accidents/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Accident> updateAccident(@PathVariable("id") Long id, @RequestBody Accident accident) {
        accident.setCodeAccident(id);
        DAO_ACCIDENT.createOrUpdate(accident);
        return new ResponseEntity<>(accident, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/accidents/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Accident> deleteAccident(@PathVariable("id") Long id) {
        Accident accident = DAO_ACCIDENT.read(Accident.class, id);
        if (accident == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            DAO_ACCIDENT.remove(accident);
            return new ResponseEntity<>(accident, HttpStatus.OK);
        }
    }
}
