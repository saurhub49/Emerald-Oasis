package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.User;

public interface UserDaoImpl extends JpaRepository<User, Integer>{
	
	public User findByEmail(String email);

}
