package com.service;

import com.login.dto.UserDto;

public interface UserService {
	
	public UserDto login(String id, String pw);
}
