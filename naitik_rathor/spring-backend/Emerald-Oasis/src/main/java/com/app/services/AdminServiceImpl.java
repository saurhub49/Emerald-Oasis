package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.CuisineDao;
import com.app.daos.EmployeeDetailsDao;
import com.app.daos.FoodItemDao;
import com.app.daos.OrderDao;
import com.app.daos.RoleDao;
import com.app.daos.UserDao;
import com.app.dtos.CuisineDTO;
import com.app.dtos.DTOEntityConverter;
import com.app.dtos.EmployeeDetailsDTO;
import com.app.dtos.FoodItemDTO;
import com.app.dtos.OrderDTO;
import com.app.dtos.UserDTO;
import com.app.entities.Cuisine;
import com.app.entities.EmployeeDetails;
import com.app.entities.FoodItem;
import com.app.entities.Order;
import com.app.entities.Role;
import com.app.entities.User;
import com.app.entities.constants.EmployeeStatus;
import com.app.entities.constants.RoleName;

@Service
@Transactional
public class AdminServiceImpl {
	
	@Autowired
	private UserDao userDao;
	@Autowired
	private RoleDao roleDao;
	@Autowired
	private CuisineDao cuisineDao;
	@Autowired
	private FoodItemDao foodItemDao;
	@Autowired
	private OrderDao orderDao;
	@Autowired
	private EmployeeDetailsDao employeeDetailsDao;
	@Autowired
	private DTOEntityConverter converter;
	
	public Role getUserRoleId(RoleName roleName) {
		Role role = roleDao.findByRoleName(roleName);
		return role;
	}
	
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
	
	public EmployeeDetails getEmployee(int employeeId) {
		List<EmployeeDetails> list = employeeDetailsDao.findByEmployee(new User(employeeId));
		if(list.isEmpty())
			return null;
		return list.get(0);
	}
	
	public EmployeeDetailsDTO editSalary(double salary, int employeeId) {
		EmployeeDetails empDetails = getEmployee(employeeId);
		if(empDetails == null)
			return null;
		empDetails.setSalary(salary);
		employeeDetailsDao.save(empDetails);
		return converter.toEmployeeDetailsDTO(empDetails);
	}
	
	public EmployeeDetailsDTO editEmployeeStatus(String status, int employeeId) {
		EmployeeDetails empDetails = getEmployee(employeeId);
		if(empDetails == null)
			return null;
		empDetails.setEmployeeStatus(EmployeeStatus.valueOf(status.toUpperCase()));
		employeeDetailsDao.save(empDetails);
		return converter.toEmployeeDetailsDTO(empDetails);
	}
	
	public EmployeeDetailsDTO confirmEmployment(int employeeId) {
		EmployeeDetails empDetails = getEmployee(employeeId);
		if(empDetails == null)
			return null;
		empDetails.setEmployeeStatus(EmployeeStatus.CONFIRMED);
		employeeDetailsDao.save(empDetails);
		return converter.toEmployeeDetailsDTO(empDetails);
	}
	
	public EmployeeDetailsDTO revokeEmployment(int employeeId) {
		EmployeeDetails empDetails = getEmployee(employeeId);
		if(empDetails == null)
			return null;
		empDetails.setEmployeeStatus(EmployeeStatus.PENDING);
		employeeDetailsDao.save(empDetails);
		return converter.toEmployeeDetailsDTO(empDetails);
	}
	
	public UserDTO deleteUser(int userId) {
		User user = userDao.getById(userId);
		userDao.deleteById(userId);
		UserDTO dto = converter.toUserDTO(user);
		dto.setPanCard("*******");
		return dto;
	}
	
	public OrderDTO deleteOrder(int orderId) {
		Order order = orderDao.getById(orderId);
		orderDao.deleteById(orderId);
		return converter.toOrderDTO(order);
	}
	
	public List<UserDTO> getUsersByRole(RoleName roleName) {
		Role role = getUserRoleId(roleName);
		List<User> list = userDao.findByRole(role);
		return list.stream().map(user -> converter.toUserDTO(user)).collect(Collectors.toList()); 
	}
	
	public UserDTO getUserById(int userId) {
		User user = userDao.getById(userId);
		if(user == null)
			return null;
		return converter.toUserDTO(user);
	}

}
