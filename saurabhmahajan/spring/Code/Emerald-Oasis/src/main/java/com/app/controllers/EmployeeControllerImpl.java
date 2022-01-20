package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.config.Response;
import com.app.dtos.UserDTO;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class EmployeeControllerImpl {

	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping("/employee/signup")
	public ResponseEntity<?> employeeSignUp(@RequestBody UserDTO userDto) {
		userDto.setRoleId(userService.getUserRoleId("employee"));
		UserDTO result = userService.saveUser(userDto);
		
		return Response.success(result);
	}

}
