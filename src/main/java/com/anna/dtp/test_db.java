package com.anna.dtp;
import com.anna.dtp.entity.*;
import javax.persistence.EntityManager;
import javax.persistence.Persistence;
public class test_db {
    public EntityManager em = Persistence.createEntityManagerFactory("openJPA").createEntityManager();
    public Offence add(Offence o){
        em.getTransaction().begin();
        Offence offenceFromDB = em.merge(o);
        em.getTransaction().commit();
        return offenceFromDB;
    }
}
