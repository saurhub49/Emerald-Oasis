package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.CuisineDao;
import com.app.daos.FoodItemDao;
import com.app.daos.OrderDao;
import com.app.dtos.CuisineDTO;
import com.app.dtos.DTOEntityConverter;
import com.app.dtos.FoodItemDTO;
import com.app.dtos.OrderDTO;
import com.app.entities.Cuisine;
import com.app.entities.FoodItem;
import com.app.entities.Order;

@Service
@Transactional
public class AdminServiceImpl {
	
	@Autowired
	private CuisineDao cuisineDao;
	@Autowired
	private FoodItemDao foodItemDao;
	@Autowired
	private OrderDao orderDao;
	@Autowired
	private DTOEntityConverter converter;
	
	public CuisineDTO addCuisine(CuisineDTO dto) {
		Cuisine cuisine = converter.toCuisineEntity(dto);
		cuisine = cuisineDao.save(cuisine);
		return converter.toCuisineDTO(cuisine);
	}
	
	public FoodItemDTO addFoodItem(FoodItemDTO dto) {
		FoodItem foodItem = converter.toFoodItemEntity(dto);
		foodItem = foodItemDao.save(foodItem);
		return converter.toFoodItemDTO(foodItem);
	}
	
	public CuisineDTO deleteCuisine(int cuisineId) {
		Cuisine cuisine = cuisineDao.getById(cuisineId);
		cuisineDao.deleteById(cuisineId);
		return converter.toCuisineDTO(cuisine);
	}
	
	public FoodItemDTO deleteFoodItem(int foodItemId) {
		FoodItem foodItem = foodItemDao.getById(foodItemId);
		foodItemDao.deleteById(foodItemId);
		return converter.toFoodItemDTO(foodItem);
	}
	
	public List<OrderDTO> getAllOrders() {
		List<Order> orders = orderDao.findAll();
		return orders.stream().map(o -> converter.toOrderDTO(o)).collect(Collectors.toList());
	}
	
	public OrderDTO getOrder(int orderId) {
		Order order = orderDao.getById(orderId);
		return converter.toOrderDTO(order);
	}

}
