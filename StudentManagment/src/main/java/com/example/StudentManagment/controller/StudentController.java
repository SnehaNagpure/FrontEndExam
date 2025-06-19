package com.example.StudentManagment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.StudentManagment.model.Student;
import com.example.StudentManagment.service.StudentService;

import jakarta.validation.Valid;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/student")
public class StudentController {
	
	@Autowired
	private StudentService studentservice;
	
	@GetMapping()
	public List <Student>GetAllStudent()
	{
		return studentservice.GetAllStudentDetails();
	}
	
	@GetMapping("/{studentId}")
	public ResponseEntity<Student> GetStudentDetails(@Valid @PathVariable("studentId") int studentId)
	{
		return new ResponseEntity<Student>(studentservice.GetStudentDetailsById(studentId),HttpStatus.OK);
	}
	
	@PostMapping("/createStudent")
	public ResponseEntity<Student> CreateStudent(@RequestBody Student studentdetails)
	{
		return new ResponseEntity<Student>(studentservice.CreateStudent(studentdetails),HttpStatus.CREATED);
	}
	
	@PutMapping("/{studentId}")
	public ResponseEntity<Student> UpdateStudent(@Valid @PathVariable("studentId") int studentId,@RequestBody Student studentdetails)
	{
		return new ResponseEntity<Student>(studentservice.UpdateStudent(studentId, studentdetails),HttpStatus.OK);
	}
	
	@DeleteMapping("/{studentId}")
	public ResponseEntity<Boolean>DeleteStudent(@Valid @PathVariable("studentId") int studentId)
	{
		studentservice.DeleteStudent(studentId);
		Boolean Flag=true;
		return new ResponseEntity<Boolean>(Flag,HttpStatus.OK);
	}
	
}
