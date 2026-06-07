package com.service;

import static common.JDBCTemplate.close;
import static common.JDBCTemplate.getConnection;

import java.sql.Connection;

import com.login.dao.UserDao;
import com.login.dao.UserDaoImpl;
import com.login.dto.UserDto;

public class UserServiceImpl implements UserService {

	private UserDao dao = new UserDaoImpl();
	
	@Override
	public UserDto login(String id, String pw) {

		Connection con = getConnection();
		UserDto res = dao.login(con, id, pw);
		
		close(con);
		System.out.println("5.db 종료\n");
		
		return res;
	}
	
}
