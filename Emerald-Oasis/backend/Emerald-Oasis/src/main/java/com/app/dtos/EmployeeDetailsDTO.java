package com.app.dtos;

import java.util.Date;




public class EmployeeDetailsDTO {
	private int employeeDetailsId;
    private int employeeId;
    private String uid;
    private String panCard;
    private String employeeStatus;
    private Date joinDate;
    private double salary;
    public EmployeeDetailsDTO() {
		super();
	}
	public EmployeeDetailsDTO(int employeeDetailsId, int employeeId, String uid, String panCard, String employeeStatus,
			Date joinDate, double salary) {
		super();
		this.employeeDetailsId = employeeDetailsId;
		this.employeeId = employeeId;
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
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
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
	public String getEmployeeStatus() {
		return employeeStatus;
	}
	public void setEmployeeStatus(String employeeStatus) {
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
		return "EmployeeDetails [employeeDetailsId=" + employeeDetailsId + ", employeeIdId=" + employeeId + ", uid=" + uid
				+ ", panCard=" + panCard + ", joinDate=" + joinDate + ", salary=" + salary + "]";
	}
}
