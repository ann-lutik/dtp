package com.anna.dtp.controller.rest;

import com.anna.dtp.entity.RoadAccidentParticipant;
import com.anna.dtp.service.impl.RoadAccidentParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class RoadAccidentParticipantRestController {

    @Autowired
    private RoadAccidentParticipantService roadAccidentParticipantService;

    @RequestMapping(value = "/roadAccidentParticipants", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<RoadAccidentParticipant> getRoadAccidentParticipants() {
        return roadAccidentParticipantService.readAll();
    }

    @RequestMapping(value = "/roadAccidentParticipants/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<RoadAccidentParticipant> getRoadAccidentParticipant(@PathVariable("id") Long id) {
        RoadAccidentParticipant r_a_p = roadAccidentParticipantService.read(id);
        if (r_a_p == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(r_a_p, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/roadAccidentParticipants", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<RoadAccidentParticipant> createRoadAccidentParticipant(@RequestBody RoadAccidentParticipant r_a_p) {
        roadAccidentParticipantService.createOrUpdate(r_a_p);
        return new ResponseEntity<>(r_a_p, HttpStatus.OK);
    }

    @RequestMapping(value = "/roadAccidentParticipants/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<RoadAccidentParticipant> updateRoadAccidentParticipant(@PathVariable("id") Long id, @RequestBody RoadAccidentParticipant r_a_p) {
        r_a_p.setCodeRoadAccidentParticipant(id);
        roadAccidentParticipantService.createOrUpdate(r_a_p);
        return new ResponseEntity<>(r_a_p, HttpStatus.OK);
    }

    @RequestMapping(value = "/roadAccidentParticipants/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<RoadAccidentParticipant> deleteRoadAccidentParticipant(@PathVariable("id") Long id) {
        RoadAccidentParticipant roadAccidentParticipant = roadAccidentParticipantService.read(id);
        if (roadAccidentParticipant == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            roadAccidentParticipantService.remove(id);
            return new ResponseEntity<>(roadAccidentParticipant, HttpStatus.OK);
        }
    }

}
