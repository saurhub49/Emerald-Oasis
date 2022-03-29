package com.app.dtos;

public class CuisineDTO {
	private int cuisineId;
	private String name;
	private String image;
	private String description;
	
	public CuisineDTO() {
		
	}

	public CuisineDTO(int cuisineId, String name, String image, String description) {
		super();
		this.cuisineId = cuisineId;
		this.name = name;
		this.image = image;
		this.description = description;
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

	@Override
	public String toString() {
		return "CuisineDto [cuisineId=" + cuisineId + ", name=" + name + ", image=" + image + "]";
	}
	
}
