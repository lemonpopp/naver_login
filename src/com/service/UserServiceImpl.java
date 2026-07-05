package com.service;

import static common.JDBCTemplate.*;

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

	@Override
	public int regist(String id, String pw, String email, String name, int birth, String mob, String gender,
			String nation, String tel, String requiredterms, String nameterms, String locationterms,
			String personalterms) {

		Connection con = getConnection();
		int res = dao.regist(con, id, pw, email, name, birth, mob, gender, 
								nation, tel, requiredterms, nameterms, locationterms, personalterms);
		
		
		if(res>0) {
			commit(con);
		}else {
			rollback(con);
		}
		
		close(con);
		
		System.out.println("5.db 종료\n");
		
		return res;
	}

	@Override
	public boolean idCheck(String id) {
		Connection con = getConnection();
		boolean res = dao.idCheck(con,id);
		
		close(con);
		
		return res;
	}

	@Override
	public String findid(String email, String phone, String name) {
		Connection con = getConnection();
		String res = dao.findid(con, email, phone, name);
		
		close(con);
		
		return res;
	}
	
}
