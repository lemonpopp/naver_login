package com.login.dao;

import java.sql.Connection;

import com.login.dto.UserDto;

public interface UserDao {
	String loginSql = " SELECT * FROM NLOGIN WHERE (ID=? OR TEL=?) AND PW=? ";
	
	public UserDto login(Connection con, String id, String pw);
}
