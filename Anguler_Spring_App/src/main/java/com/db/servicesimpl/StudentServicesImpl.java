package com.db.servicesimpl;

import java.util.List;
import java.util.Optional;

import javax.swing.text.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.model.Student;
import com.db.repositry.StudentRepositryInterface;
import com.db.services.StudentServices;
import com.db.utils.StudentUtiliy;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class StudentServicesImpl implements StudentServices {

	@Autowired
	public StudentRepositryInterface studentRepositry;

	@Override
	public Student createStudent(Student student) {
		Student stu = studentRepositry.save(student);
		log.info(student.toString());
		return stu;
	}

	@Override
	public boolean upadteStudent(Student student) {
		Optional<Student> s = studentRepositry.findById(student.getId());
		if (s.isPresent()) {
			Student oldS = s.get();
			oldS.setId(student.getId());
			oldS.setFirstName(student.getFirstName());
			oldS.setLastName(student.getLastName());
			oldS.setAge(student.getAge());
			oldS.setMobileNumber(student.getMobileNumber());
			oldS.setEmailId(student.getEmailId());
			oldS.setAddress(student.getAddress());
			oldS.setUserId(student.getUserId());
			try {
				studentRepositry.save(oldS);
				log.info(StudentUtiliy.DATA_UPDATE_IS_SUCCEFULLY);
				log.info(oldS.toString()); // Abhay
				return true;
			} catch (Exception e) {
				log.error(StudentUtiliy.DATA_UPDATION_IS_FAILED);
				log.error(e.getMessage()); // Abhay 
				return false;
			}
		} else {
			return false;
		}
	}

	@Override
	public boolean deleteStudentById(Integer id) {
		try {
			studentRepositry.deleteById(id);
		} catch (Exception e) {
			log.error(e.getMessage());
			return false;
		}
		return true;
	}

	@Override
	public Student getStudentByFirstNameAndMobileNumber(String name, long mobilenumber) {
		//Optional<Student> stOptional= studentRepositry.findByFirstNameAndMobileNumber(name, mobilenumber);
		Student stu=studentRepositry.findByFirstNameAndMobileNumber(name, mobilenumber);
		log.info(stu.toString());
		return stu;
	}

	@Override
	public List<Student> getAllStudent() {
		return studentRepositry.findAll();
	}

	@Override
	public Student getStudentById(int id) {	
		return studentRepositry.findById(id).get();
	}

}
