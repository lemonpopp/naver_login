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
	
	String idCheckSql = " SELECT COUNT(*) FROM NLOGIN WHERE ID=? ";
	
	public boolean idCheck(Connection con, String id);

	public String findid(Connection con, String email, String phone, String name);
	
	String findIdSql = " SELECT ID FROM NLOGIN WHERE (EMAIL=? OR TEL=?) AND NAME=? ";
}
