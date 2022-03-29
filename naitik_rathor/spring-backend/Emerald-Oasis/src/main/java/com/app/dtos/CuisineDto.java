package com.app.dtos;

public class CuisineDTO {
	private int cuisineId;
	private String name;
	private String image;
	
	public CuisineDTO() {
		
	}

	public CuisineDTO(int cuisineId, String name, String image) {
		super();
		this.cuisineId = cuisineId;
		this.name = name;
		this.image = image;
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

	@Override
	public String toString() {
		return "CuisineDto [cuisineId=" + cuisineId + ", name=" + name + ", image=" + image + "]";
	}
	
}
