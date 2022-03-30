package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.config.Response;
import com.app.dtos.Credentials;
import com.app.dtos.CuisineDTO;
import com.app.dtos.FoodItemDTO;
import com.app.dtos.UserDTO;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class HomeController {
	
	@Autowired
	private UserServiceImpl userService;

	@GetMapping("/")
	public String welcomeMessage() {
		return "Welcome to Emerald Oasis";
	}
	
	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@RequestBody Credentials cred) {
		UserDTO result = userService.findUserByEmailAndPassword(cred);
		if(result == null) {
			return Response.error("user not found");
		}
		return Response.success(result);
	}
	
	
	@GetMapping("/user/cuisines")
	public ResponseEntity<?> findAllCuisines() {
		List<CuisineDTO> result = userService.findAllCuisines();
		return Response.success(result);
	}
	
	@GetMapping("/user/fooditems/{id}")
	public ResponseEntity<?> findFoodItemsByCuisineId(@PathVariable("id") int cuisineId) {
		List<FoodItemDTO> result = userService.findFoodItemByCuisineId(cuisineId);
		if(result == null)
			return Response.error("No food items available !");
		return Response.success(result);
	}

}
