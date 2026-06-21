package com.login.dao;

import static common.JDBCTemplate.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.login.dto.UserDto;


public class UserDaoImpl implements UserDao {

	public UserDto login(Connection con, String id, String pw) {
		
		PreparedStatement pstm = null;
		ResultSet rs = null;
		UserDto res = new UserDto();
		
		
		try {
			pstm = con.prepareStatement(loginSql);
			pstm.setString(1, id);
			pstm.setString(2, id);
			pstm.setString(3,pw);
			System.out.println("3.query 준비: " + loginSql);
			
			rs = pstm.executeQuery();
			System.out.println("4.query 실행 및 리턴");
			if(rs.next()) {
				res.setMyno(rs.getInt(1));
				res.setMyid(rs.getString(2));
				res.setMypw(rs.getString(3));
				res.setMyemail(rs.getString(4));
				res.setMyname(rs.getString(5));
				res.setMybirth(rs.getInt(6));
				res.setMymob(rs.getString(7));
				res.setMygender(rs.getString(8));
				res.setMynation(rs.getString(9));
				res.setMytel(rs.getString(10));
			}
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("3/4 단계 에러");
		} finally {
			close(rs);
			close(pstm);
		}
		
		return res;
	}


	@Override
	public int regist(Connection con, String id, String pw, String email, String name, int birth, String mob,
			String gender, String nation, String tel, String requiredterms, String nameterms, String locationterms,
			String personalterms) {
		
		PreparedStatement pstm = null;
		int res = 0;
		
		try {
			pstm = con.prepareStatement(registSql);
			
			pstm.setString(1, id);
			pstm.setString(2, pw);
			pstm.setString(3, email);
			pstm.setString(4, name);
			pstm.setInt(5, birth);
			pstm.setString(6, mob);
			pstm.setString(7, gender);
			pstm.setString(8, nation);
			pstm.setString(9, tel);
			pstm.setString(10, requiredterms);
			pstm.setString(11, nameterms);
			pstm.setString(12, locationterms);
			pstm.setString(13, personalterms);
			
			System.out.println("3.query 준비: " + registSql);
			
			res = pstm.executeUpdate();
			
			System.out.println("4.query 실행 및 리턴");

		
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("3/4 단계 에러");
		} finally {
			close(pstm);
		}
		
		return res;
	}





}
