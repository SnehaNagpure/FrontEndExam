package com.example.StudentManagment.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.StudentManagment.model.Student;
import com.example.StudentManagment.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository studentrepository;
	
	public List <Student> GetAllStudentDetails()
	{
		return studentrepository.findAll();
	}
	
	public Student GetStudentDetailsById(int studentId)
	{
		return studentrepository.findById(studentId).orElseThrow(()->new RuntimeException("Student not found..."));
	}
	
	public Student CreateStudent(Student studentdetails)
	{
		return studentrepository.save(studentdetails);
	}
	
	public Student UpdateStudent(int studentId,Student studentdetails)
	{
		Student existedstudentdetails=studentrepository.findById(studentId).orElseThrow(()->new RuntimeException("Student not found..."));
		existedstudentdetails.setStudentName(studentdetails.getStudentName());
		existedstudentdetails.setStudentClass(studentdetails.getStudentClass());
		existedstudentdetails.setStudentAge(studentdetails.getStudentAge());
		return studentrepository.save(existedstudentdetails);
	}
	
	
		public void DeleteStudent(int studentId)
		{
			Student existedstudentdetails=studentrepository.findById(studentId).orElseThrow(()->new RuntimeException("Student not found..."));
			studentrepository.delete(existedstudentdetails);
		}
}
