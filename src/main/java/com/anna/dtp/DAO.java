package com.anna.dtp;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

public class DAO<T> {

    private EntityManager em = Persistence
            .createEntityManagerFactory("openJPA")
            .createEntityManager();

    public T read(Class<T> entityClass, Long id) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        T entity = em.find(entityClass, id);
        transaction.commit();
        return entity;
    }

    public List<T> readAll(Class<T> entityClass) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        CriteriaQuery<T> criteriaQuery = em.getCriteriaBuilder().createQuery(entityClass);
        List<T> entities = em.createQuery(criteriaQuery.select(criteriaQuery.from(entityClass))).getResultList();
        transaction.commit();
        return entities;
    }

    public void create(T entity) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        em.persist(entity);
        transaction.commit();
    }

    public void update(T entity) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        em.merge(entity);
        transaction.commit();
    }

    public void remove(T entity) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        em.remove(entity);
        transaction.commit();
    }

}
