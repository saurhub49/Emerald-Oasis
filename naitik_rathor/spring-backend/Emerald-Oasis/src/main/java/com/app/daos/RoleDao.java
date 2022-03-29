package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Role;

public interface RoleDao extends JpaRepository<Role, Integer> {
	
	public Role findByRoleName(String roleName);
}
