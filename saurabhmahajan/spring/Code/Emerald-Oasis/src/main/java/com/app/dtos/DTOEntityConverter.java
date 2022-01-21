package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.entities.Role;
import com.app.entities.User;

@Component
public class DTOEntityConverter {
	
	public UserDTO toUserDTO(User user) {
		UserDTO dto = new UserDTO();
		
		dto.setUserId(user.getUserId());
		dto.setFirstName(user.getFirstName());
		dto.setLastName(user.getLastName());
		dto.setEmail(user.getEmail());
		dto.setPhoneNo(user.getPhoneNo());
		dto.setPassword(user.getPassword());
		dto.setRoleId((user.getRole()).getRoleId());
		
		return dto;
	}
	
	public User toUserEntity(UserDTO dto) {
		User user = new User();
		
		user.setUserId(dto.getUserId());
		user.setFirstName(dto.getFirstName());
		user.setLastName(dto.getLastName());
		user.setEmail(dto.getEmail());
		user.setPhoneNo(dto.getPhoneNo());
		user.setPassword(dto.getPassword());
		user.setRole(new Role(dto.getRoleId()));
		
		return user;
	}

}
