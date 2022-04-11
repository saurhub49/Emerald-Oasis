package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="fooditem")
public class FoodItem {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int foodItemId;
	private String name;
	private String description;
	private String image;
	private double price;
	private int quantity;
	@ManyToOne
	@JoinColumn(name = "cuisineId")
	private Cuisine cuisine;
	@OneToMany(mappedBy = "foodItem", cascade = CascadeType.ALL)
	private List<OrderDetails> orderDetailsList;
	
	public FoodItem() {
		
	}

	public FoodItem(int foodItemId, String name, String description, String image, double price, int quantity,
			Cuisine cuisine) {
		super();
		this.foodItemId = foodItemId;
		this.name = name;
		this.description = description;
		this.image = image;
		this.price = price;
		this.quantity = quantity;
		this.cuisine = cuisine;
	}

	public int getFoodItemId() {
		return foodItemId;
	}

	public void setFoodItemId(int foodItemId) {
		this.foodItemId = foodItemId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Cuisine getCuisine() {
		return cuisine;
	}

	public void setCuisine(Cuisine cuisine) {
		this.cuisine = cuisine;
	}

	@Override
	public String toString() {
		return "FoodItem [foodItemId=" + foodItemId + ", name=" + name + ", image=" + image + ", price=" + price
				+ ", quantity=" + quantity + "]";
	}
	
	
	
	
}
