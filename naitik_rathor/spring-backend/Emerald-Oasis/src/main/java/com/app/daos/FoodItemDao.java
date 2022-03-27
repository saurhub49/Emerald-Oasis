package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.FoodItem;

public interface FoodItemDao extends JpaRepository<FoodItem, Integer>{

}
