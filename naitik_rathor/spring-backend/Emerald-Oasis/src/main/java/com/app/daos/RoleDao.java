package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Role;
import com.app.entities.constants.RoleName;

public interface RoleDao extends JpaRepository<Role, Integer> {
	
	public Role findByRoleName(RoleName roleName);
}
