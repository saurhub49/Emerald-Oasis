package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="cuisine")
public class Cuisine {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int cuisineId;
	@Column(unique = true)
	private String name;
	private String image;
	private String description;
	@OneToMany(mappedBy = "cuisine", cascade = CascadeType.ALL)
	private List<FoodItem> foodItemList;
	
	public Cuisine() {
		
	}

	public Cuisine(int cuisineId, String name, String image, String description) {
		super();
		this.cuisineId = cuisineId;
		this.name = name;
		this.image = image;
		this.description = description;
	}
	
	public Cuisine (int cuisineId) {
		this.cuisineId = cuisineId;
		
	}

	public int getCuisineId() {
		return cuisineId;
	}

	public void setCuisineId(int cuisineId) {
		this.cuisineId = cuisineId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<FoodItem> getFoodItemList() {
		return foodItemList;
	}

	
	public void setFoodItemList(List<FoodItem> foodItemList) {
		this.foodItemList = foodItemList;
	}

	@Override
	public String toString() {
		return "Cuisine [cuisineId=" + cuisineId + ", name=" + name + ", image=" + image + "]";
	}
	
	
	

	
	
	
	
}
