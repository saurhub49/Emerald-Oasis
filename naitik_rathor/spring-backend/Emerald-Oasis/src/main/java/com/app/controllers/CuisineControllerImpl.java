package com.app.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.CuisineDto;
import com.app.dtos.Response;
import com.app.services.CuisineServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class CuisineControllerImpl {
	@Autowired
	private CuisineServiceImpl cuisineService;
	
	@GetMapping("/")
	public String welcome() {
		return "welcome to emrald oasis";
	}
	
	@GetMapping("/cuisine")
	public ResponseEntity<?> findAll() {
		List<CuisineDto> result = cuisineService.findAllCuisines();
		return Response.success(result);
	}
	
}