package com.db.repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.db.model.Login;

public interface LoginRepositryInterface extends JpaRepository<Login ,Integer> {
	
	    List<Login> findByUserId(String userId);
	    
	    Login findByUserIdAndPassword(String userId,String password);
}
