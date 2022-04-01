package com.app.dtos;

public class UserContactDetailsDTO {
	private int userId;
	private String firstName;
	private String lastName;
	private String email;
	private String phoneNo;
	public UserContactDetailsDTO() {
		super();
	}
	public UserContactDetailsDTO(int userId, String firstName, String lastName, String email, String phoneNo) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNo = phoneNo;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int employeeId) {
		this.userId = employeeId;
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
		return "EmployeeContactDetailsDTO [userId=" + userId + ", firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email + ", phoneNo=" + phoneNo + "]";
	}
	
 
}
