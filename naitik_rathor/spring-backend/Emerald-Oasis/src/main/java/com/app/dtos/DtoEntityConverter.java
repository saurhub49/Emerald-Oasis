package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.entities.Cuisine;

@Component
public class DtoEntityConverter {
	public CuisineDto toCuisineDto(Cuisine entity) {
		CuisineDto dto = new CuisineDto();
		dto.setCuisineId(entity.getCuisineId());
		dto.setName(entity.getName());
		dto.setImage(entity.getImage());
		return dto;
	}
	
	public Cuisine toCuisineEntity(CuisineDto dto) {
		Cuisine entity = new Cuisine();
		entity.setCuisineId(dto.getCuisineId());
		entity.setName(dto.getName());
		entity.setImage(dto.getImage());
		return entity;		
	}
}
