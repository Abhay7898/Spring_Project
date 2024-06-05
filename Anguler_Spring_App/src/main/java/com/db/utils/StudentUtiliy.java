package com.db.utils;

public class StudentUtiliy {

	public static final String DATA_UPDATE_IS_SUCCEFULLY = "Data Update is Succefully";

	public static final String DATA_UPDATION_IS_FAILED = "data updation is failed";

	public static final String USER_ID_NOT_FOUND = "User Id not Found";

	public static final String SUCCEFULLY = "Successfull";

	public static final String USER_NOT_FOUND = "User Not Found";

	public static final String USER_ALREADY_EXISTS = "User Already Exists";

	public static final String PASSWORD_NOT_MATCH="Password Not Match";
	
	public static final String PLEASE_ENTER_CORRECT_INFORMATION="Please Enter Correct_Information";
	
	public static final String encryption(String password) {
		char ch[] = password.toCharArray();
		String str = "";
		for(char c : ch) {
			str += "*@" + c + "@*";
		}
		return str;
	}

	public static final String decryption(String password) {
		return password.replace("*@", "").replace("@*", "");
	}

	public static final boolean validatePassword(String password, String confirmPassword) {
		return password != null && confirmPassword != null ?  password.equals(confirmPassword) ? true : false : false;
	}
	
	public static boolean isUserAdmin(String code) {
		return code == null || code.isBlank() ? false : code.equals("78988")? true:false;
	}
}
