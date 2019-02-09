package com.anna.dtp;
import com.anna.dtp.entity.*;
import org.junit.Test;

public class db_test {
    test_db service = new test_db();
    @Test
    public void testSaveRecord() throws Exception {
        Offence offence = new Offence();

        offence.setNameOffence("Превышение скорости");
        //Записали в БД
        Offence offence1 = service.add(offence);
        //Вывели записанную в БД запись
        System.out.println(offence1);
    }
}
