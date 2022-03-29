package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.EmployeeDetails;
import com.app.entities.User;

public interface EmployeeDetailsDao extends JpaRepository<EmployeeDetails, Integer> {
	List<EmployeeDetails> findByEmployee(User employee);
	

}
