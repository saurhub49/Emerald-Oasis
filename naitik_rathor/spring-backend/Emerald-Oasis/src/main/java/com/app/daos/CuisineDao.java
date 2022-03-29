package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Cuisine;

public interface CuisineDao extends JpaRepository<Cuisine, Integer> {
	

}
