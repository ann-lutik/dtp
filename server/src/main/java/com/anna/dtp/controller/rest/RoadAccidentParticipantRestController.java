package com.anna.dtp.controller.rest;
import com.anna.dtp.DAO;
import com.anna.dtp.entity.RoadAccidentParticipant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class RoadAccidentParticipantRestController {
    @Autowired
    private DAO<RoadAccidentParticipant> DAO_ROAD_ACCIDENT_PARTICIPANT;

    @RequestMapping(value = "/rest/roadAccidentParticipants", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<RoadAccidentParticipant> getRoadAccidentParticipants() {
        return DAO_ROAD_ACCIDENT_PARTICIPANT.readAll(RoadAccidentParticipant.class);
    }

    @RequestMapping(value = "/rest/roadAccidentParticipants/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<RoadAccidentParticipant> getRoadAccidentParticipant(@PathVariable("id") Long id) {
        RoadAccidentParticipant r_a_p = DAO_ROAD_ACCIDENT_PARTICIPANT.read(RoadAccidentParticipant.class, id);
        if (r_a_p == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(r_a_p, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/rest/roadAccidentParticipants", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<RoadAccidentParticipant> createRoadAccidentParticipant(@RequestBody RoadAccidentParticipant r_a_p) {
        DAO_ROAD_ACCIDENT_PARTICIPANT.createOrUpdate(r_a_p);
        return new ResponseEntity<>(r_a_p, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/roadAccidentParticipants/{id}", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE}, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<RoadAccidentParticipant> updateRoadAccidentParticipant(@PathVariable("id") Long id, @RequestBody RoadAccidentParticipant r_a_p) {
        r_a_p.setCodeRoadAccidentParticipant(id);
        DAO_ROAD_ACCIDENT_PARTICIPANT.createOrUpdate(r_a_p);
        return new ResponseEntity<>(r_a_p, HttpStatus.OK);
    }

    @RequestMapping(value = "/rest/roadAccidentParticipants/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<RoadAccidentParticipant> deleteRoadAccidentParticipant(@PathVariable("id") Long id) {
        RoadAccidentParticipant r_a_p = DAO_ROAD_ACCIDENT_PARTICIPANT.read(RoadAccidentParticipant.class, id);
        if (r_a_p == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            DAO_ROAD_ACCIDENT_PARTICIPANT.remove(r_a_p);
            return new ResponseEntity<>(r_a_p, HttpStatus.OK);
        }
    }
}
