package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.config.Response;
import com.app.dtos.Credentials;
import com.app.dtos.UserDTO;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class UserControllerImpl {
	
	@Autowired
	private UserServiceImpl userService;
	
	@GetMapping("/")
	public String welcomeMessage() {
		return "Welcome to Emerald Oasis";
	}
	
	@PostMapping("/user/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto) {
		userDto.setRoleId(userService.getUserRoleId("customer"));
		UserDTO result = userService.saveUser(userDto);
		
		return Response.success(result);
	}
	
	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@RequestBody Credentials cred) {
		UserDTO result = userService.findUserByEmailAndPassword(cred);
		if(result == null) {
			return Response.error("user not found");
		}
		return Response.success(result);
	}
}
