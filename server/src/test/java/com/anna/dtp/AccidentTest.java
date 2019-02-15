package com.anna.dtp;

import com.anna.dtp.dao.DAO;
import com.anna.dtp.entity.Accident;
import org.junit.Assert;
import org.junit.Test;

import java.util.Date;
import java.util.List;
import java.util.Random;

public class AccidentTest {

    private static final DAO<Accident> ACCIDENT_DAO = new DAO<>();

    @Test
    public void readTest() {
        try {
            Random random = new Random();
            List<Accident> accidents = ACCIDENT_DAO.readAll(Accident.class);
            if (!accidents.isEmpty()) {
                ACCIDENT_DAO.read(Accident.class, accidents.get(random.nextInt(accidents.size())).getCodeAccident());
            }
        } catch (Throwable e) {
            Assert.fail(e.getMessage());
        }
    }

    @Test
    public void createUpdateRemoveTest() {
        try {
            Accident accident = new Accident(new Date(), "test", 1, 1, "test", "test", "test");
            ACCIDENT_DAO.createOrUpdate(accident);
            accident.setTypeAccident("test1");
            ACCIDENT_DAO.createOrUpdate(accident);
            ACCIDENT_DAO.remove(accident);
        } catch (Throwable e) {
            Assert.fail(e.getMessage());
        }
    }

}
