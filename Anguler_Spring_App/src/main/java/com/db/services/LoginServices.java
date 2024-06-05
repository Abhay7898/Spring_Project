package com.db.services;

import com.db.model.Login;

public interface LoginServices {
	
	public Login createUser(Login login);
	public Login login(String userId,String password);

}
