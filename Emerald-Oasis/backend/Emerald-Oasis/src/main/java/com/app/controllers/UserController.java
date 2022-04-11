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
import com.app.dtos.UserContactDetailsDTO;
import com.app.dtos.Credentials;
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
		if(result == null)
			return Response.error("Email already exists !");
		return Response.success(result);
	}
	
	@GetMapping("/user/profile/{id}")
	public ResponseEntity<?> getProfile(@PathVariable("id") int userId) {
		UserDTO result = userService.getUserDetails(userId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@PutMapping("/user/profile")
	public ResponseEntity<?> editProfile(@RequestBody UserDTO userDTO) {
		UserDTO result = userService.saveEditedProfile(userDTO);
		userService.changeOrderAddress(userDTO.getUserId(), userDTO.getAddressLine());
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@PutMapping("/user/profile/verifypassword/{id}")
	public ResponseEntity<?> verifyPassword(@PathVariable("id") int userId, @RequestBody Credentials cred) {
		boolean result = userService.verifyOldPassword(userId, cred.getPassword());
		if(!result)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@PutMapping("/user/profile/changepassword/{id}")
	public ResponseEntity<?> changePassword(@PathVariable("id") int userId, @RequestBody Credentials cred) {
		UserDTO result = userService.changePassword(userId, cred.getPassword());
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success("Password changed successfully");
	}
	
	@PutMapping("/user/{userid}/order/additem/{itemid}")
	public ResponseEntity<?> addItemToCart(@PathVariable("userid") int userId, @PathVariable("itemid") int itemId) {
		OrderDTO order = userService.getOngoingOrder(userId); 
		if(order != null)
			return Response.error("Previous order still in progress");
		List<FoodItemDTO> result = userService.addItemToCart(userId, itemId);
		if(result == null)
			return Response.error("Item unavailable !");
		return Response.success(result);
	}
	
	@DeleteMapping("/user/{userid}/order/deleteitem/{itemid}")
	public ResponseEntity<?> deleteItemFromCart(@PathVariable("userid") int userId, @PathVariable("itemid") int itemId) {
		List<FoodItemDTO> result = userService.deleteItemFromCart(userId, itemId);
		if(result == null)
			return Response.error("Order already placed");
		return Response.success(result);
	}
	
	@GetMapping("/user/cart/{id}")
	public ResponseEntity<?> getCartItems(@PathVariable("id") int userId) {
		List<FoodItemDTO> result = userService.getCartItems(userId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@GetMapping("/user/order/cart/{id}")
	public ResponseEntity<?> getUnDeliveredOrder(@PathVariable("id") int userId) {
		OrderDTO result = userService.getCartOrder(userId);
		if(result != null)
			return Response.success(result);
		result = userService.getOngoingOrder(userId);
		if(result != null)
			return Response.success(result);
		return Response.error("Cart is empty !");
	}
	
	@PutMapping("/user/profile/address/{id}")
	public ResponseEntity<?> addAddress(@PathVariable("id") int userId, @RequestBody UserDTO dto) {
		OrderDTO result = userService.addAddress(userId, dto.getAddressLine());
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
	
	@GetMapping("/user/order/getemployee/{id}")
		public ResponseEntity<?> getEmployeeContactDetails(@PathVariable("id") int userId) {
			UserContactDetailsDTO result = userService.getEmployeeContactDetails(userId);
			if(result == null)
				return Response.error("Unexpected error !");
			return Response.success(result);
	}
	
}
