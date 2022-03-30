package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Cuisine;
import com.app.entities.FoodItem;

public interface FoodItemDao extends JpaRepository<FoodItem, Integer> {
	List<FoodItem> findByCuisine(Cuisine cuisineId);
	
}
