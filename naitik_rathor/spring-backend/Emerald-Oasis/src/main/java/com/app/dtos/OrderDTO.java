package com.app.dtos;

import java.util.Date;

public class OrderDTO {

	private int orderId;
	private Date orderedTimeStamp;
	private Date deliveredTimeStamp;
	private double totalAmount;
	private String orderStatus;
	private String address;
	private int userId;
	private int employeeId;
	public OrderDTO() {
		super();
	}
	public OrderDTO(int orderId, Date orderedTimeStamp, Date deliveredTimeStamp, double totalAmount, String orderStatus,
			int userId, int employeeId) {
		super();
		this.orderId = orderId;
		this.orderedTimeStamp = orderedTimeStamp;
		this.deliveredTimeStamp = deliveredTimeStamp;
		this.totalAmount = totalAmount;
		this.orderStatus = orderStatus;
		this.userId = userId;
		this.employeeId = employeeId;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public Date getOrderedTimeStamp() {
		return orderedTimeStamp;
	}
	public void setOrderedTimeStamp(Date orderedTimeStamp) {
		this.orderedTimeStamp = orderedTimeStamp;
	}
	public Date getDeliveredTimeStamp() {
		return deliveredTimeStamp;
	}
	public void setDeliveredTimeStamp(Date deliveredTimeStamp) {
		this.deliveredTimeStamp = deliveredTimeStamp;
	}
	public double getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	@Override
	public String toString() {
		return "OrderDTO [orderId=" + orderId + ", orderedTimeStamp=" + orderedTimeStamp + ", deliveredTimeStamp="
				+ deliveredTimeStamp + ", totalAmount=" + totalAmount + ", orderStatus=" + orderStatus + ", userId="
				+ userId + ", employeeId=" + employeeId + "]";
	}
	
}
