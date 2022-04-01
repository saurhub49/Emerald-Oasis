package com.app.dtos;

public class EmployeeContactDetailsDTO {
	private int employeeId;
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNo;
	public EmployeeContactDetailsDTO() {
		super();
	}
	public EmployeeContactDetailsDTO(int employeeId, String firstName, String lastName, String email, String phoneNo) {
		super();
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNo = phoneNo;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	@Override
	public String toString() {
		return "EmployeeContactDetailsDTO [employeeId=" + employeeId + ", firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email + ", phoneNo=" + phoneNo + "]";
	}
	
 
}
