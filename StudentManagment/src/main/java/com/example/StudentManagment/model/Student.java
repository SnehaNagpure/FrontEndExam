package com.example.StudentManagment.model;


import jakarta.persistence.*;

@Entity
@Table(name="Student")

public class Student {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="studentId")
	private int studentId;
	
	@Column(name="studentName")
	private String studentName;
	
	@Column(name="studentAge")
	private int studentAge;
	
	@Column(name="studentClass")
	private int studentClass;

	public Student() {}
	
	
	/**
	 * @param studentId
	 * @param studentName
	 * @param studentAge
	 * @param studentClass
	 */
	public Student(int studentId, String studentName, int studentAge, int studentClass) {
	
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentAge = studentAge;
		this.studentClass = studentClass;
	}


	//Getter and Setter
	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public int getStudentAge() {
		return studentAge;
	}

	public void setStudentAge(int studentAge) {
		this.studentAge = studentAge;
	}

	public int getStudentClass() {
		return studentClass;
	}

	public void setStudentClass(int studentClass) {
		this.studentClass = studentClass;
	}
	
	
}
