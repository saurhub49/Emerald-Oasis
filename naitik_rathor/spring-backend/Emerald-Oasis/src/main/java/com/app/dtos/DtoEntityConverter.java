package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.entities.Cuisine;
import com.app.entities.EmployeeDetails;
import com.app.entities.FoodItem;
import com.app.entities.Order;
import com.app.entities.constants.EmployeeStatus;
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
		dto.setDescription(entity.getDescription());
		return dto;
	}
	
	public Cuisine toCuisineEntity(CuisineDTO dto) {
		Cuisine entity = new Cuisine();
		entity.setCuisineId(dto.getCuisineId());
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		entity.setDescription(dto.getDescription());
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
	
	public EmployeeDetailsDTO toEmployeeDetailsDTO(EmployeeDetails entity) {
		EmployeeDetailsDTO dto = new EmployeeDetailsDTO();
		dto.setEmployeeDetailsId(entity.getEmployeeDetailsId());
		dto.setEmployeeStatus(entity.getEmployeeStatus().toString());
		dto.setJoinDate(entity.getJoinDate());
		dto.setPanCard(entity.getPanCard());
		dto.setSalary(entity.getSalary());
		dto.setUid(entity.getUid());
		dto.setEmployeeId(entity.getEmployee().getUserId());
		return dto;
	}
	
	public EmployeeDetails toEmployeeDetailsEntity(EmployeeDetailsDTO dto) {
		EmployeeDetails entity = new EmployeeDetails();
		entity.setEmployeeDetailsId(dto.getEmployeeDetailsId());
		entity.setEmployeeStatus(EmployeeStatus.PENDING);
		entity.setJoinDate(dto.getJoinDate());
		entity.setPanCard(dto.getPanCard());
		entity.setSalary(dto.getSalary());
		entity.setUid(dto.getUid());
		entity.setEmployee(new User(dto.getEmployeeId()));
		return entity;
	}

}
