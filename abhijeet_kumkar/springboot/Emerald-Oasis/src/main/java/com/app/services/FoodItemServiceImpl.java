package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.FoodItemDao;
import com.app.dtos.DTOEntityConverter;
import com.app.dtos.FoodItemDTO;
import com.app.entities.Cuisine;
import com.app.entities.FoodItem;

@Transactional
@Service
public class FoodItemServiceImpl {
	@Autowired
	private FoodItemDao foodItemDao;
	@Autowired
	private DTOEntityConverter converter;
	

	public List<FoodItemDTO> findFoodItemByCuisineId(int cuisineId) {
		Cuisine cuisine = new Cuisine(cuisineId);
		List<FoodItem> list = foodItemDao.findByCuisine(cuisine);
		return list.stream().map(fi -> converter.toFoodItemDTO(fi)).collect(Collectors.toList());
	}

}
