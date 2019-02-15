package com.anna.dtp.dao;

import com.anna.dtp.entity.Identifiable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

@Repository
public class DAO<T extends Identifiable> {

    private EntityManager em = Persistence
            .createEntityManagerFactory("openJPA")
            .createEntityManager();

    public T read(Class<T> entityClass, Long id) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        try {
            T entity = em.find(entityClass, id);
            transaction.commit();
            return entity;
        } catch (RuntimeException e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            throw e;
        }
    }

    public List<T> readAll(Class<T> entityClass) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        try {
            CriteriaQuery<T> criteriaQuery = em.getCriteriaBuilder().createQuery(entityClass);
            List<T> entities = em.createQuery(criteriaQuery.select(criteriaQuery.from(entityClass))).getResultList();
            transaction.commit();
            return entities;
        } catch (RuntimeException e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            throw e;
        }
    }

    public void createOrUpdate(T entity) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        try {
            if (entity.getId() == null) {
                em.persist(entity);
            } else {
                em.merge(entity);
            }
            transaction.commit();
        } catch (RuntimeException e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            throw e;
        }
    }

    public void remove(T entity) {
        EntityTransaction transaction = em.getTransaction();
        transaction.begin();
        try {
            em.remove(entity);
            transaction.commit();
        } catch (RuntimeException e) {
            if (transaction.isActive()) {
                transaction.rollback();
            }
            throw e;
        }
    }

}
