package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.entities.Cuisine;
import com.app.entities.FoodItem;
import com.app.entities.Order;
import com.app.entities.constants.OrderStatus;
import com.app.entities.Role;
import com.app.entities.User;

@Component
public class DTOEntityConverter {
	
	public UserDTO toUserDTO(User user) {
		UserDTO dto = new UserDTO();
		
		dto.setUserId(user.getUserId());
		dto.setFirstName(user.getFirstName());
		dto.setLastName(user.getLastName());
		dto.setEmail(user.getEmail());
		dto.setPhoneNo(user.getPhoneNo());
		dto.setPassword(user.getPassword());
		dto.setRoleId((user.getRole()).getRoleId());
		
		return dto;
	}
	
	public User toUserEntity(UserDTO dto) {
		User user = new User();
		
		user.setUserId(dto.getUserId());
		user.setFirstName(dto.getFirstName());
		user.setLastName(dto.getLastName());
		user.setEmail(dto.getEmail());
		user.setPhoneNo(dto.getPhoneNo());
		user.setPassword(dto.getPassword());
		user.setRole(new Role(dto.getRoleId()));
		
		return user;
	}
	
	public FoodItemDTO toFoodItemDTO(FoodItem entity) {
		if(entity == null)
			return null;
		FoodItemDTO dto = new FoodItemDTO();
		dto.setCuisineId(entity.getCuisine().getCuisineId());
		dto.setFoodItemId(entity.getFoodItemId());
		dto.setImage(entity.getImage());
		dto.setName(entity.getName());
		dto.setDescription(entity.getDescription());
		dto.setPrice(entity.getPrice());
		dto.setQuantity(entity.getQuantity());
		return dto;
	}
	
	public FoodItem toFoodItemEntity(FoodItemDTO dto) {
		if(dto == null)
			return null;
		FoodItem entity = new FoodItem();
		entity.setCuisine(new Cuisine(dto.getCuisineId()));
		entity.setFoodItemId(dto.getFoodItemId());
		entity.setImage(dto.getImage());
		entity.setName(dto.getName());
		entity.setDescription(dto.getDescription());
		entity.setPrice(dto.getPrice());
		entity.setQuantity(dto.getQuantity());
		return entity;
	}
	
	public CuisineDTO toCuisineDTO(Cuisine entity) {
		CuisineDTO dto = new CuisineDTO();
		dto.setCuisineId(entity.getCuisineId());
		dto.setName(entity.getName());
		dto.setImage(entity.getImage());
		return dto;
	}
	
	public Cuisine toCuisineEntity(CuisineDTO dto) {
		Cuisine entity = new Cuisine();
		entity.setCuisineId(dto.getCuisineId());
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		return entity;		
	}
	
	public OrderDTO toOrderDTO(Order order) {
		OrderDTO dto = new OrderDTO();
		dto.setOrderId(order.getOrderId());
		dto.setOrderedTimeStamp(order.getOrderedTimeStamp());
		dto.setDeliveredTimeStamp(order.getDeliveredTimeStamp());
		dto.setTotalAmount(order.getTotalAmount());
		dto.setOrderStatus(order.getOrderStatus().toString());
		dto.setAddress(order.getAddress());
		dto.setUserId(order.getUser().getUserId());
		if(order.getEmployee() != null)
			dto.setEmployeeId(order.getEmployee().getUserId());
		return dto;
	}
	public Order toOrderEntity(OrderDTO dto) {
		Order order = new Order();
		order.setOrderId(dto.getOrderId());
		order.setOrderedTimeStamp(dto.getOrderedTimeStamp());
		order.setDeliveredTimeStamp(dto.getDeliveredTimeStamp());
		order.setTotalAmount(dto.getTotalAmount());
		order.setOrderStatus(OrderStatus.valueOf((dto.getOrderStatus()).toUpperCase()));
		order.setAddress(dto.getAddress());
		order.setUser(new User(dto.getUserId()));
		order.setEmployee(new User(dto.getEmployeeId()));
		return order;
	}

}
