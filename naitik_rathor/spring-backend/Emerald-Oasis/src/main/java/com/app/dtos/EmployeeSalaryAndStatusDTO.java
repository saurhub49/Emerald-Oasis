package com.app.dtos;


public class EmployeeSalaryAndStatusDTO {

	private int employeeId;
    private String employeeStatus;
    private double salary;
	public EmployeeSalaryAndStatusDTO() {
		super();
	}
	public EmployeeSalaryAndStatusDTO(int employeeId, String employeeStatus, double salary) {
		super();
		this.employeeId = employeeId;
		this.employeeStatus = employeeStatus;
		this.salary = salary;
	}
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmployeeStatus() {
		return employeeStatus;
	}
	public void setEmployeeStatus(String employeeStatus) {
		this.employeeStatus = employeeStatus;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	@Override
	public String toString() {
		return "EmployeeSalaryAndStatusDTO [employeeId=" + employeeId + ", employeeStatus=" + employeeStatus
				+ ", salary=" + salary + "]";
	}
    
}
