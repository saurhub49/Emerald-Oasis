package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "OrderDetails")
public class OrderDetails {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int orderDetailsId;
	@ManyToOne
	@JoinColumn(name = "foodItemId")
	private FoodItem foodItem;
	@ManyToOne
	@JoinColumn(name = "orderId")
	private Order order;
	
	public OrderDetails() {
		super();
	}
	public OrderDetails(FoodItem foodItem, Order order) {
		super();
		this.foodItem = foodItem;
		this.order = order;
	}
	public OrderDetails(int orderDetailsId, FoodItem foodItem, Order order) {
		super();
		this.orderDetailsId = orderDetailsId;
		this.foodItem = foodItem;
		this.order = order;
	}
	public int getOrderDetailsId() {
		return orderDetailsId;
	}
	public void setOrderDetailsId(int orderDetailsId) {
		this.orderDetailsId = orderDetailsId;
	}
	public FoodItem getFoodItem() {
		return foodItem;
	}
	public void setFoodItem(FoodItem foodItem) {
		this.foodItem = foodItem;
	}
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	@Override
	public String toString() {
		return "OrderDetails [orderDetailsId=" + orderDetailsId + ", foodItem=" + foodItem + ", order=" + order + "]";
	}
	
}
