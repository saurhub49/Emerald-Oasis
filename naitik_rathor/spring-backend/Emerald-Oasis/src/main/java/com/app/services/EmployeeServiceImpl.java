package com.app.services;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.EmployeeDetailsDao;
import com.app.daos.OrderDao;
import com.app.dtos.DTOEntityConverter;
import com.app.dtos.EmployeeDetailsDTO;
import com.app.dtos.OrderDTO;
import com.app.entities.EmployeeDetails;
import com.app.entities.Order;
import com.app.entities.constants.EmployeeStatus;
import com.app.entities.constants.OrderStatus;
import com.app.entities.User;

@Service
@Transactional
public class EmployeeServiceImpl {
	
	@Autowired
	private OrderDao orderDao;
	@Autowired
	private EmployeeDetailsDao employeeDetailsDao;
	@Autowired
	private DTOEntityConverter converter;
	
	public void addEmployeeDetails(EmployeeDetailsDTO employeeDetailsDTO) {
		employeeDetailsDTO.setJoinDate(new Date());
		EmployeeDetails empDetails = converter.toEmployeeDetailsEntity(employeeDetailsDTO);
		employeeDetailsDao.save(empDetails);
	}
	
	public OrderDTO acceptOrder(int employeeId, int orderId) {
		Order order = orderDao.getById(orderId);
		order.setOrderStatus(OrderStatus.ONTHEWAY);
		order.setEmployee(new User(employeeId));
		order = orderDao.save(order);
		return converter.toOrderDTO(order);
	}
	
	public List<OrderDTO> getAllPlacedOrders() {
		List<Order> orders = orderDao.findByOrderStatus(OrderStatus.PLACED);
		return orders.stream().map(o -> converter.toOrderDTO(o)).collect(Collectors.toList());
	}
	
	public OrderDTO confirmOrder(int orderId) {
		Order order = orderDao.getById(orderId);
		order.setDeliveredTimeStamp(new Date());
		order.setOrderStatus(OrderStatus.DELIVERED);
		order = orderDao.save(order);
		return converter.toOrderDTO(order);
	}
	
	public OrderDTO reportOrder(int orderId) {
		Order order = orderDao.getById(orderId);
		order.setOrderStatus(OrderStatus.REPORTED);
		order = orderDao.save(order);
		return converter.toOrderDTO(order);
	}
	
	public List<OrderDTO> employeeOrderHistory(int employeeId) {
		User user = new User(employeeId);
		List<Order> orders = orderDao.findByEmployee(user);
		return orders.stream().map(o -> converter.toOrderDTO(o)).collect(Collectors.toList());
	}
	
	public EmployeeDetailsDTO getEmployeeDetails(int employeeId) {
		List<EmployeeDetails> list = employeeDetailsDao.findByEmployee(new User(employeeId));
		if(list.isEmpty())
			return null;
		return converter.toEmployeeDetailsDTO(list.get(0));
	}
	
	public EmployeeDetails getEmployee(int employeeId) {
		List<EmployeeDetails> list = employeeDetailsDao.findByEmployee(new User(employeeId));
		if(list.isEmpty())
			return null;
		return list.get(0);
	}
	
	public EmployeeDetailsDTO statusAvailable(int employeeId) {
		EmployeeDetails details = getEmployee(employeeId);
		details.setEmployeeStatus(EmployeeStatus.AVAILABLE);
		employeeDetailsDao.save(details);	
		return converter.toEmployeeDetailsDTO(details);
	}
	
	public EmployeeDetailsDTO statusUnavailable(int employeeId) {
		EmployeeDetails details = getEmployee(employeeId);
		details.setEmployeeStatus(EmployeeStatus.UNAVAILABLE);
		employeeDetailsDao.save(details);	
		return converter.toEmployeeDetailsDTO(details);
	}

}
