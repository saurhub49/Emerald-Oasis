package com.app.entities;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "User")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int userId;
	private String firstName;
	private String lastName;
	@Lob
	private byte[] profilePhoto;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.DATE)
	private Date birthdate;
	private String gender;
	private String email;
	private String password;
	private String phoneNo;
	private String cardNo;
	@ManyToOne
	@JoinColumn(name = "roleId")
	private Role role;
	
	public User() {
		super();
	}

	public User(int userId, String firstName, String lastName, byte[] profilePhoto, Date birthdate, String gender,
			String email, String password, String phoneNo, String cardNo, Role role) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.profilePhoto = profilePhoto;
		this.birthdate = birthdate;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.phoneNo = phoneNo;
		this.cardNo = cardNo;
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

	public byte[] getProfilePhoto() {
		return profilePhoto;
	}

	public void setProfilePhoto(byte[] profilePhoto) {
		this.profilePhoto = profilePhoto;
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

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
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
				+ Arrays.toString(profilePhoto) + ", birthdate=" + birthdate + ", gender=" + gender + ", email=" + email
				+ ", phoneNo=" + phoneNo + ", cardNo=" + cardNo + ", role=" + role + "]";
	}
	

}
