package com.app.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "User")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int userId;
	private String firstName;
	private String lastName;
	private String addressLine;
	@Temporal(TemporalType.DATE)
	private Date birthdate;
	private String gender;
	private String email;
	private String password;
	private String phoneNo;
	@ManyToOne
	@JoinColumn(name = "roleId")
	private Role role;
	@OneToOne(mappedBy = "employee", cascade = CascadeType.ALL)
	private EmployeeDetails employeeDetails;
	
	public User() {
		super();
	}
	
	public User( int userId) {
		super();
		this.userId = userId;
	}

	public User(int userId, String firstName, String lastName, String addressLine, Date birthdate, String gender,
			String email, String password, String phoneNo, Role role) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.addressLine = addressLine;
		this.birthdate = birthdate;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.role = role;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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

	public String getAddressLine() {
		return addressLine;
	}

	public void setAddressLine(String addressLine) {
		this.addressLine = addressLine;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", profilePhoto="
				+ addressLine + ", birthdate=" + birthdate + ", gender=" + gender + ", email=" + email
				+ ", phoneNo=" + phoneNo + ", role=" + role + "]";
	}
	

}
