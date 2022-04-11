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
import com.app.dtos.CuisineDTO;
import com.app.dtos.EmployeeDetailsDTO;
import com.app.dtos.EmployeeSalaryAndStatusDTO;
import com.app.dtos.FoodItemDTO;
import com.app.dtos.OrderDTO;
import com.app.dtos.UserDTO;
import com.app.entities.constants.RoleName;
import com.app.services.AdminServiceImpl;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class AdminController {
	
	@Autowired
	private AdminServiceImpl adminService;
	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping("/admin/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDto) {
		userDto.setRoleId(userService.getUserRoleId(RoleName.MANAGER));
		UserDTO result = userService.saveUser(userDto);
		if(result == null)
			return Response.error("Email already exists !");
		return Response.success(result);
	}
	
	
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
	
	@PutMapping("/admin/employee/editsalary")
	public ResponseEntity<?> editSalary(@RequestBody EmployeeSalaryAndStatusDTO salaryAndStatus) {
		EmployeeDetailsDTO result = adminService.editSalary(salaryAndStatus.getSalary(), salaryAndStatus.getEmployeeId());
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@PutMapping("/admin/employee/editstatus")
	public ResponseEntity<?> editEmployeeStatus(@RequestBody EmployeeSalaryAndStatusDTO salaryAndStatus) {
		EmployeeDetailsDTO result = adminService.editEmployeeStatus(salaryAndStatus.getEmployeeStatus(), salaryAndStatus.getEmployeeId());
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@PutMapping("/admin/employee/confirmstatus/{id}")
	public ResponseEntity<?> confirmEmployementStatus(@PathVariable("id") int employeeId) {
		EmployeeDetailsDTO result = adminService.confirmEmployment(employeeId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@PutMapping("/admin/employee/revokestatus/{id}")
	public ResponseEntity<?> revokeEmployementStatus(@PathVariable("id") int employeeId) {
		EmployeeDetailsDTO result = adminService.revokeEmployment(employeeId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@DeleteMapping("/admin/deleteuser/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable("id") int userId) {
		UserDTO result = adminService.deleteUser(userId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@DeleteMapping("/admin/deleteorder/{id}")
	public ResponseEntity<?> deleteOrder(@PathVariable("id") int orderId) {
		OrderDTO result = adminService.deleteOrder(orderId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@GetMapping("/admin/customers") 
	public ResponseEntity<?> customersList() {
		List<UserDTO> result = adminService.getUsersByRole(RoleName.CUSTOMER);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@GetMapping("/admin/employees") 
	public ResponseEntity<?> employeesList() {
		List<UserDTO> result = adminService.getUsersByRole(RoleName.EMPLOYEE);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@GetMapping("/admin/employeedetails/{id}")
	public ResponseEntity<?> getEmployeeDetails(@PathVariable("id") int employeeId) {
		EmployeeDetailsDTO result = adminService.getEmployeeDetails(employeeId);
		if(result == null)
			return Response.error("Unexpected error !");
		return Response.success(result);
	}
	
	@GetMapping("/admin/getuser/{id}")
	public ResponseEntity<?> getUser(@PathVariable("id") int userId) {
		UserDTO result = adminService.getUserById(userId);
		if(result == null)
			return Response.error("User not found !");
		return Response.success(result);
	}

}
