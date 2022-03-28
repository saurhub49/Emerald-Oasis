package com.app.dtos;

public class FoodItemDTO {
	private int foodItemId;
	private String name;
	private String image;
	private String description;
	private double price;
	private int quantity;
	private int cuisineId;
	
	public FoodItemDTO() {
		
	}


	public FoodItemDTO(int foodItemId, String name, String image, String description, double price, int quantity,
			int cuisineId) {
		super();
		this.foodItemId = foodItemId;
		this.name = name;
		this.image = image;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.cuisineId = cuisineId;
	}


	public int getCuisineId() {
		return cuisineId;
	}

	public void setCuisineId(int cuisineId) {
		this.cuisineId = cuisineId;
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

	@Override
	public String toString() {
		return "FoodItemDTO [foodItemId=" + foodItemId + ", name=" + name + ", image=" + image + ", price=" + price
				+ ", quantity=" + quantity + "]";
	}
	
	
	

}
