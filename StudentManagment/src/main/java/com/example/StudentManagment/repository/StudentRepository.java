package com.example.StudentManagment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.StudentManagment.model.Student;

public interface StudentRepository extends JpaRepository <Student,Integer>{
	

}
