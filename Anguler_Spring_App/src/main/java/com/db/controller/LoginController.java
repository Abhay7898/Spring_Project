package com.db.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.db.model.Login;
import com.db.model.Student;
import com.db.servicesimpl.LoginServicesImpl;
import com.db.utils.Result;
import com.db.utils.StudentUtiliy;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin
public class LoginController {

	@Autowired
	public LoginServicesImpl loginServicesImpl;

	@PostMapping("/createUser")
	public ResponseEntity<?> createUser(@RequestBody Login login) {
		log.info("CreateUser API Call");

		boolean passwordValidation = StudentUtiliy.validatePassword(login.getPassword(), login.getConfrimPassword());
		if (passwordValidation) {
			Login result = loginServicesImpl.createUser(login);
			if (result != null) {
				return new ResponseEntity<>(login,HttpStatus.OK);
			} else {
				return new ResponseEntity<>(StudentUtiliy.USER_ALREADY_EXISTS, HttpStatus.NOT_FOUND);
			}
		}
		return new ResponseEntity<>(StudentUtiliy.PASSWORD_NOT_MATCH, HttpStatus.NOT_FOUND);
	}

	@GetMapping("/login")
	public ResponseEntity<?> login(@Param("userName") String userName, @Param("password") String password) {
		Login result=loginServicesImpl.login(userName, password);
		if(result != null) {
			Result r = new Result();
			r.setMsg(StudentUtiliy.SUCCEFULLY);
			r.setAdmin(result.isAdmin());
			return new ResponseEntity<>(r,HttpStatus.OK);
		}		
		return new ResponseEntity<>(StudentUtiliy.PLEASE_ENTER_CORRECT_INFORMATION, HttpStatus.NOT_FOUND);

	}
}
