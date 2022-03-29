package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Order;
import com.app.entities.OrderStatus;
import com.app.entities.User;

public interface OrderDao extends JpaRepository<Order, Integer> {

	List<Order> findByOrderStatusAndUser(OrderStatus status, User user);
	List<Order> findByOrderStatus(OrderStatus status);
	List<Order> findByUser(User user);
	List<Order> findByEmployee(User employee);
}
