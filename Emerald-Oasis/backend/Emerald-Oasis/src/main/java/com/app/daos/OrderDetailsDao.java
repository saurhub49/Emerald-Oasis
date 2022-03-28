package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.FoodItem;
import com.app.entities.Order;
import com.app.entities.OrderDetails;

public interface OrderDetailsDao extends JpaRepository<OrderDetails, Integer> {
	
	List<OrderDetails> findByOrder(Order order);
	
	List<OrderDetails> findByFoodItemAndOrder(FoodItem foodItem, Order order);

}
