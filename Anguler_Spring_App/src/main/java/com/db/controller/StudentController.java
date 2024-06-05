package com.db.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.db.model.Student;
import com.db.servicesimpl.StudentServicesImpl;
import com.db.utils.Result;
import com.db.utils.StudentUtiliy;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin
public class StudentController {

	@Autowired
	public StudentServicesImpl studentServicesImpl;

	@PostMapping("/saveStudent")
	public Student saveStudent(@RequestBody Student stu) {
		log.info("SaveStudent API Call");
		return studentServicesImpl.createStudent(stu);
	}

	@PutMapping("/updateStudent")
	public ResponseEntity<?> updateStudent(@RequestBody Student stu) {
		boolean result = studentServicesImpl.upadteStudent(stu);
		log.info("UpdateStudent API Call");
		if (result) {
			Result r = new Result();
			r.setMsg(StudentUtiliy.DATA_UPDATE_IS_SUCCEFULLY);
			log.info(StudentUtiliy.DATA_UPDATE_IS_SUCCEFULLY);
			return new ResponseEntity<>(r, HttpStatus.OK);
		} else {
			log.error(StudentUtiliy.DATA_UPDATION_IS_FAILED);
			return new ResponseEntity<>(StudentUtiliy.DATA_UPDATION_IS_FAILED, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteStudent/{id}")
	public ResponseEntity<?> deleteStudentById(@PathVariable Integer id) {
		boolean result = studentServicesImpl.deleteStudentById(id);
		log.info("DeleteStudentById API Call");
		if (result) {
			Result r = new Result();
			r.setMsg(StudentUtiliy.SUCCEFULLY);
			log.info(StudentUtiliy.SUCCEFULLY);
			return new ResponseEntity<>(r, HttpStatus.OK);
		} else {
			log.error(StudentUtiliy.USER_ID_NOT_FOUND);
			return new ResponseEntity<>(StudentUtiliy.USER_ID_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/getStudentByFirstNameAndMobileNumber")
	public ResponseEntity<?> getStudentByFirstNameAndMobileNumber(@Param("name") String name,
			@Param("mobilenumber") long mobilenumber) {
		Student stu = studentServicesImpl.getStudentByFirstNameAndMobileNumber(name, mobilenumber);
		log.info("GetStudentByFirstNameAndMobileNumber API Call");
		if (stu != null) {
			log.info(StudentUtiliy.SUCCEFULLY);
			return new ResponseEntity<>(stu, HttpStatus.FOUND);
		} else {
			log.error(StudentUtiliy.USER_NOT_FOUND);
			return new ResponseEntity<>(StudentUtiliy.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/getAllStudent")
	public List<Student> getAllStudent() {
		return studentServicesImpl.getAllStudent();
	}

	@GetMapping("/getStudentById/{id}")
	public Student getById(@PathVariable Integer id) {
		return studentServicesImpl.getStudentById(id);
	}
}
