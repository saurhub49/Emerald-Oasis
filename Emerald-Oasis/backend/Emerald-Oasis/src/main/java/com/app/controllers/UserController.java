package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.config.Response;
import com.app.dtos.Credentials;
import com.app.dtos.CuisineDTO;
import com.app.dtos.FoodItemDTO;
import com.app.dtos.OrderDTO;
import com.app.dtos.UserDTO;
import com.app.entities.constants.RoleName;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class UserController {
	
	@Autowired
	private UserServiceImpl userService;
	
	
	@PostMapping("/user/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto) {
		userDto.setRoleId(userService.getUserRoleId(RoleName.CUSTOMER));
		UserDTO result = userService.saveUser(userDto);
		
		return Response.success(result);
	}
	
	@PutMapping("/user/{userid}/order/additem/{itemid}")
	public ResponseEntity<?> addItemToCart(@PathVariable("userid") int userId, @PathVariable("itemid") int itemId) {
		List<FoodItemDTO> result = userService.addItemToCart(userId, itemId);
		if(result == null)
			return Response.error("Item unavailable !");
		return Response.success(result);
	}
	
	@DeleteMapping("/user/{userid}/order/deleteitem/{itemid}")
	public ResponseEntity<?> deleteItemFromCart(@PathVariable("userid") int userId, @PathVariable("itemid") int itemId) {
		List<FoodItemDTO> result = userService.deleteItemFromCart(userId, itemId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@PutMapping("/user/order/placeorder/{id}")
	public ResponseEntity<?> placeOrder(@PathVariable("id") int userId) {
		OrderDTO result = userService.placeOrder(userId);
		if(result == null)
			return Response.error("Address cannot be empty !");
		return Response.success(result);
	} 
	
	@GetMapping("/user/order/history/{id}")
	public ResponseEntity<?> orderHistory(@PathVariable("id") int userId) {
		List<OrderDTO> result = userService.userOrderHistory(userId);
		return Response.success(result);
	}
	
}
