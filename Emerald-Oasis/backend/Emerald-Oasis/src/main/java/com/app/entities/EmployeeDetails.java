package com.app.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.app.entities.constants.EmployeeStatus;

@Entity
@Table(name = "EmployeeDetails")
public class EmployeeDetails {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int employeeDetailsId;
	@OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "employeeId")
    private User employee;
    private String uid;
    private String panCard;
    @Enumerated(EnumType.STRING)
    private EmployeeStatus employeeStatus;
    @Temporal(TemporalType.DATE)
    private Date joinDate;
    private double salary;
	public EmployeeDetails() {
		super();
	}
	
	public EmployeeDetails(int employeeDetailsId, User employee, String uid, String panCard,
			EmployeeStatus employeeStatus, Date joinDate, double salary) {
		super();
		this.employeeDetailsId = employeeDetailsId;
		this.employee = employee;
		this.uid = uid;
		this.panCard = panCard;
		this.employeeStatus = employeeStatus;
		this.joinDate = joinDate;
		this.salary = salary;
	}

	public int getEmployeeDetailsId() {
		return employeeDetailsId;
	}
	public void setEmployeeDetailsId(int employeeDetailsId) {
		this.employeeDetailsId = employeeDetailsId;
	}
	public User getEmployee() {
		return employee;
	}
	public void setEmployee(User employee) {
		this.employee = employee;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getPanCard() {
		return panCard;
	}
	public void setPanCard(String panCard) {
		this.panCard = panCard;
	}
	public EmployeeStatus getEmployeeStatus() {
		return employeeStatus;
	}

	public void setEmployeeStatus(EmployeeStatus employeeStatus) {
		this.employeeStatus = employeeStatus;
	}

	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	@Override
	public String toString() {
		return "EmployeeDetails [employeeDetailsId=" + employeeDetailsId + ", employee=" + employee + ", uid=" + uid
				+ ", panCard=" + panCard + ", joinDate=" + joinDate + ", salary=" + salary + "]";
	}
}
