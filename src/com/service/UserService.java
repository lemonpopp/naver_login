package com.service;

import com.login.dto.UserDto;

public interface UserService {
	
	public UserDto login(String id, String pw);
	
	public int regist(String id, String pw, String email, String name,
						  int birth, String mob, String gender, String nation,
						  String tel, String requiredterms, String nameterms,
						  String locationterms, String personalterms);
}
