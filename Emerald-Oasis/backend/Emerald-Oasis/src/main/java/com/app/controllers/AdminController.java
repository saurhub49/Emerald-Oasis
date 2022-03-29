package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.config.Response;
import com.app.dtos.CuisineDTO;
import com.app.dtos.FoodItemDTO;
import com.app.dtos.OrderDTO;
import com.app.services.AdminServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class AdminController {
	
	@Autowired
	private AdminServiceImpl adminService;
	
	
	@PostMapping("/admin/addcuisine")
	public ResponseEntity<?> addCuisine(@RequestBody CuisineDTO dto) {
		CuisineDTO result = adminService.addCuisine(dto);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@PostMapping("/admin/addfooditem")
	public ResponseEntity<?> addFoodItem(@RequestBody FoodItemDTO dto) {
		FoodItemDTO result = adminService.addFoodItem(dto);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@DeleteMapping("/admin/deletecuisine/{id}")
	public ResponseEntity<?> deleteCuisine(@PathVariable("id") int cuisineId) {
		CuisineDTO result = adminService.deleteCuisine(cuisineId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@DeleteMapping("/admin/deletefooditem/{id}")
	public ResponseEntity<?> deleteFoodItem(@PathVariable("id") int foodItemId) {
		FoodItemDTO result = adminService.deleteFoodItem(foodItemId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@GetMapping("/admin/getallorders")
	public ResponseEntity<?> getAllOrders() {
		List<OrderDTO> result = adminService.getAllOrders();
		return Response.success(result);
		
	}
	
	@GetMapping("/admin/order/{id}")
	public ResponseEntity<?> getOrderDetails(@PathVariable("id") int orderId) {
		OrderDTO result = adminService.getOrder(orderId);
		return Response.success(result);
	}

}
