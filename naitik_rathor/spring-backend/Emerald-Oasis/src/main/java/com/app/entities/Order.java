package com.app.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.app.entities.constants.OrderStatus;


@Entity
@Table(name = "Orders")
public class Order {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int orderId;
	@Temporal(TemporalType.TIMESTAMP)
    private Date orderedTimeStamp;
	@Temporal(TemporalType.TIMESTAMP)
    private Date deliveredTimeStamp;
    private double totalAmount;
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;
    private String address;
    @ManyToOne
	@JoinColumn(name = "userId")
    private User user;
    @OneToOne
    @JoinColumn(name = "employeeId")
    private User employee;
    
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderDetails> itemList;
    
	public Order() {
		super();
	}
	
	public Order(double totalAmount,String address, OrderStatus orderStatus, User user) {
		super();
		this.totalAmount = totalAmount;
		this.address = address;
		this.orderStatus = orderStatus;
		this.user = user;
	}

	public Order(int orderId, Date orderedTimeStamp, Date deliveredTimeStamp, double totalAmount, OrderStatus orderStatus,
			User user, User employee) {
		super();
		this.orderId = orderId;
		this.orderedTimeStamp = orderedTimeStamp;
		this.deliveredTimeStamp = deliveredTimeStamp;
		this.totalAmount = totalAmount;
		this.orderStatus = orderStatus;
		this.user = user;
		this.employee = employee;
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
	public OrderStatus getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(OrderStatus orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public User getEmployee() {
		return employee;
	}
	public void setEmployee(User employee) {
		this.employee = employee;
	}
	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", orderedTimeStamp=" + orderedTimeStamp + ", deliveredTimeStamp="
				+ deliveredTimeStamp + ", totalAmount=" + totalAmount + ", orderStatus=" + orderStatus + ", user="
				+ user + ", employee=" + employee + "]";
	}
    
    
}
