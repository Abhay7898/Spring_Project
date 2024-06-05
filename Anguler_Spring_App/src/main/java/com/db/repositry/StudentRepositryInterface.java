package com.db.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.db.model.Student;

public interface StudentRepositryInterface extends JpaRepository<Student, Integer> {

	Student findByFirstNameAndMobileNumber(String name, long mobileNumber);

}
