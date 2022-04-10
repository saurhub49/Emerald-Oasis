package com.app.services;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.daos.CuisineDao;
import com.app.daos.FoodItemDao;
import com.app.daos.OrderDao;
import com.app.daos.OrderDetailsDao;
import com.app.daos.RoleDao;
import com.app.daos.UserDao;
import com.app.dtos.Credentials;
import com.app.dtos.CuisineDTO;
import com.app.dtos.DTOEntityConverter;
import com.app.dtos.UserContactDetailsDTO;
import com.app.dtos.FoodItemDTO;
import com.app.dtos.OrderDTO;
import com.app.dtos.RoleDTO;
import com.app.dtos.UserDTO;
import com.app.entities.Cuisine;
import com.app.entities.FoodItem;
import com.app.entities.Order;
import com.app.entities.OrderDetails;
import com.app.entities.constants.OrderStatus;
import com.app.entities.constants.RoleName;
import com.app.entities.Role;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl {
	
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
	private OrderDetailsDao orderDetailsDao;
	@Autowired
	private DTOEntityConverter converter;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public UserDTO saveUser(UserDTO userDto) {
		String rawPassword = userDto.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		userDto.setPassword(encPassword);
		User user = converter.toUserEntity(userDto);
		user = userDao.save(user);
		userDto = converter.toUserDTO(user);
		userDto.setPassword("*******");
		return userDto;
	}
	
	public UserDTO saveEditedProfile(UserDTO userDTO) {
		User user = converter.toUserEntity(userDTO);
		user = userDao.save(user);
		return converter.toUserDTO(user);
	}
	
	public UserDTO findUserByEmailAndPassword(Credentials cred) {
		User dbUser = userDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbUser != null && passwordEncoder.matches(rawPassword, dbUser.getPassword())) {
			UserDTO result = converter.toUserDTO(dbUser);
			result.setPassword("*******");
			return result;
		}
		return null;
	}
	
	public RoleDTO getRole(int roleId) {
		Role role = roleDao.getById(roleId);
		return converter.toRoleDTO(role);
	}
	
	public int getUserRoleId(RoleName roleName) {
		Role role = roleDao.findByRoleName(roleName);
		return role.getRoleId();
	}
	
	public List<CuisineDTO> findAllCuisines(){
		List<Cuisine> cuisineList = cuisineDao.findAll();
		return cuisineList.stream()
				.map(cuisine -> converter.toCuisineDTO(cuisine))
				.collect(Collectors.toList());
	}
	
	public List<FoodItemDTO> findFoodItemByCuisineId(int cuisineId) {
		Cuisine cuisine = new Cuisine(cuisineId);
		List<FoodItem> list = foodItemDao.findByCuisine(cuisine);
		if(list.isEmpty())
			return null;
		return list.stream().map(fi -> converter.toFoodItemDTO(fi)).collect(Collectors.toList());
	}
	
	public Order getCart(int userId) {
		User user = new User(userId);
		List<Order> cart = orderDao.findByOrderStatusAndUser(OrderStatus.CART, user);
		if(cart.isEmpty())
			return null;
		return cart.get(0);
	}
	
	public OrderDTO getOngoingOrder(int userId) {
		User user = userDao.getById(userId);
		List<Order> list = orderDao.findByOrderStatusAndUser(OrderStatus.PLACED, user);
		if(!list.isEmpty())
			return converter.toOrderDTO(list.get(0));
		list = orderDao.findByOrderStatusAndUser(OrderStatus.ONTHEWAY, user);
		if(!list.isEmpty())
			return converter.toOrderDTO(list.get(0));
		return null;
	}
	
	public List<FoodItemDTO> addItemToCart(int userId, int itemId) {
		User user = userDao.getById(userId);
		FoodItem item = foodItemDao.getById(itemId);
		Order order = getCart(userId);
		if(item.getQuantity() <= 0)
			return null;
		if(order == null) {
			order = new Order(0,user.getAddressLine(), OrderStatus.CART, user);
			orderDao.save(order);
			order = getCart(userId);
		}
		item.setQuantity(item.getQuantity() - 1);
		foodItemDao.save(item);
		OrderDetails orderDetails = new OrderDetails(item, order);
		orderDetailsDao.save(orderDetails);
		order.setTotalAmount(order.getTotalAmount() + item.getPrice());
		orderDao.save(order);
		
		List<OrderDetails> orderDetailsList = orderDetailsDao.findByOrder(order);
		return orderDetailsList.stream().map(odl -> converter.toFoodItemDTO(odl.getFoodItem())).collect(Collectors.toList());
	}
	
	public List<FoodItemDTO> deleteItemFromCart(int userId, int itemId) {
		FoodItem item = foodItemDao.getById(itemId);
		Order order = getCart(userId);
		if(order == null)
			return null;
		
		List<OrderDetails> itemList = orderDetailsDao.findByFoodItemAndOrder(item, order);
		if(itemList.isEmpty()) 
			return null;
		item.setQuantity(item.getQuantity() + 1);
		foodItemDao.save(item);
		orderDetailsDao.deleteById(itemList.get(0).getOrderDetailsId());
		
		order.setTotalAmount(order.getTotalAmount() - itemList.get(0).getFoodItem().getPrice());
		orderDao.save(order);
		itemList = orderDetailsDao.findByOrder(order);
		if(itemList.isEmpty()) {
			orderDao.deleteById(order.getOrderId());
		}
		
		List<OrderDetails> orderDetailsList = orderDetailsDao.findByOrder(order);
		return orderDetailsList.stream().map(odl -> converter.toFoodItemDTO(odl.getFoodItem())).collect(Collectors.toList());
	}
	
	public List<FoodItemDTO> getCartItems(int userId) {
		Order order = getCart(userId);
		List<OrderDetails> orderDetailsList = new ArrayList<>();
		if(order != null) {
			orderDetailsList = orderDetailsDao.findByOrder(order);
			return orderDetailsList.stream().map(odl -> converter.toFoodItemDTO(odl.getFoodItem())).collect(Collectors.toList());
		}
		OrderDTO dto = getOngoingOrder(userId);
		if(dto != null) {
			order = orderDao.getById(dto.getOrderId());
			orderDetailsList = orderDetailsDao.findByOrder(order);
			return orderDetailsList.stream().map(odl -> converter.toFoodItemDTO(odl.getFoodItem())).collect(Collectors.toList());
		}
		return null;
	}
	
	public OrderDTO getCartOrder(int userId) {
		Order order = getCart(userId);
		if(order == null)
			return null;
		return converter.toOrderDTO(order);
	}
	
	public OrderDTO addAddress(int userId, String address) {
		User user = userDao.getById(userId);
		user.setAddressLine(address);
		user = userDao.save(user);
		
		Order order = getCart(userId);
		if(order != null)
			order.setAddress(address);
		return converter.toOrderDTO(order);
	}
	
	public OrderDTO placeOrder(int userId) {
		User user = userDao.getById(userId);
		if(user.getAddressLine() == null)
			return null;
		Order cart = getCart(userId);
		if(cart == null)
			return null;
		cart.setOrderedTimeStamp(new Date());
		cart.setOrderStatus(OrderStatus.PLACED);
		cart = orderDao.save(cart);

		return converter.toOrderDTO(cart);
	}
	
	public List<OrderDTO> userOrderHistory(int userId) {
		User user = new User(userId);
		List<Order> orders = orderDao.findByUser(user);
		return orders.stream().map(o -> converter.toOrderDTO(o)).collect(Collectors.toList());
	}
	
	public UserContactDetailsDTO getEmployeeContactDetails(int userId) {
		OrderDTO order = getOngoingOrder(userId);
		int employeeId = order.getEmployeeId();
		User user = userDao.getById(employeeId);
		return converter.toUserContactDetailsDTO(user);
	}
	
//	###
	
	public UserDTO getProfileDetails(int userId) {
		// TODO Auto-generated method stub
		User dbUser = userDao.findByUserId(userId);
		return converter.toUserDTO(dbUser);
	}
}
