package com.db.servicesimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.model.Login;
import com.db.repositry.LoginRepositryInterface;
import com.db.services.LoginServices;
import com.db.utils.StudentUtiliy;

@Service
public class LoginServicesImpl implements LoginServices {

	@Autowired
	public LoginRepositryInterface loginRepositryInterface;

	@Override
	public Login createUser(Login login) {
		List<Login> list = loginRepositryInterface.findByUserId(login.getUserId());
		if (list.isEmpty()) {
			String setPasswordToDB = StudentUtiliy.encryption(login.getPassword());
			login.setPassword(setPasswordToDB);
			login.setAdmin(StudentUtiliy.isUserAdmin(login.getUserCode()));
			return loginRepositryInterface.save(login);
		}
		return null;
	}

	@Override
	public Login login(String userId, String password) {
		List<Login> list = loginRepositryInterface.findByUserId(userId);
		if (list.isEmpty()) {
			return null;
		} else {
			if (StudentUtiliy.encryption(password).equals(list.get(0).getPassword())) {
				return list.get(0);
			} else {
				return null;
			}
		}
	}

}
//Name : Abahay
// Password: hello@aba78
// 12abhello@aba7834cd
// ab12hello@aba7834cd
// 1h2el3l4o5@6
// *h*e*l*l*o*@*a*b*a*7*8*
