	package com.login.dao;

import java.sql.Connection;

import com.login.dto.UserDto;

public interface UserDao {
	String loginSql = " SELECT * FROM NLOGIN WHERE (ID=? OR TEL=?) AND PW=? ";
	
	public UserDto login(Connection con, String id, String pw);
	
	String registSql = " INSERT INTO NLOGIN "+
			"VALUES(SEQ_LOGINSTU.NEXTVAL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";

	public int regist(Connection con, String id, String pw, String email, String name, int birth, String mob,
			String gender, String nation, String tel, String requiredterms, String nameterms, String locationterms,
			String personalterms);
}
