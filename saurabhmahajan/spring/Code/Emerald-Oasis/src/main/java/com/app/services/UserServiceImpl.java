package com.app.services;


import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.daos.RoleDaoImpl;
import com.app.daos.UserDaoImpl;
import com.app.dtos.Credentials;
import com.app.dtos.DTOEntityConverter;
import com.app.dtos.UserDTO;
import com.app.entities.Role;
import com.app.entities.User;

@Service
@Transactional
public class UserServiceImpl {
	
	@Autowired
	private UserDaoImpl userDao;
	@Autowired
	private RoleDaoImpl roleDao;
	@Autowired
	private DTOEntityConverter converter;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public UserDTO saveUser(UserDTO userDto) {
		String rawPassword = userDto.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		userDto.setPassword(encPassword);
		User user = converter.toUserEntity(userDto);
		user = userDao.save(user);
		userDto = converter.toUserDTO(user);
		userDto.setPassword("*******");
		return userDto;
	}
	
	public UserDTO findUserByEmailAndPassword(Credentials cred) {
		User dbUser = userDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbUser != null && passwordEncoder.matches(rawPassword, dbUser.getPassword())) {
			UserDTO result = converter.toUserDTO(dbUser);
			result.setPassword("*******");
			return result;
		}
		return null;
	}
	
	public int getUserRoleId(String roleName) {
		Role role = roleDao.findByRoleName(roleName);
		return role.getRoleId();
	}
}
