package com.db.services;

import java.util.List;

import com.db.model.Student;

public interface StudentServices {
	
	public Student createStudent(Student student);
	public boolean upadteStudent(Student student);
	public boolean deleteStudentById(Integer id);
	public Student getStudentByFirstNameAndMobileNumber(String name,long mobilenumber);
	public List<Student> getAllStudent();
	public Student getStudentById(int id);
}

