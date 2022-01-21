package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Role;

public interface RoleDaoImpl extends JpaRepository<Role, Integer> {
	
	public Role findByRoleName(String roleName);
}
