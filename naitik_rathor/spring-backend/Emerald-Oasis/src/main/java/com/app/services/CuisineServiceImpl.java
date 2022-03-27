package com.app.services;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.CuisineDao;
import com.app.dtos.CuisineDto;
import com.app.dtos.DtoEntityConverter;
import com.app.entities.Cuisine;


@Transactional
@Service
public class CuisineServiceImpl {
	@Autowired
	private CuisineDao cuisineDao;
	@Autowired
	private DtoEntityConverter converter;
	
	public List<CuisineDto> findAllCuisines(){
		List<Cuisine> cuisineList = cuisineDao.findAll();
		return cuisineList.stream()
				.map(cuisine -> converter.toCuisineDto(cuisine))
				.collect(Collectors.toList());
	}
}
