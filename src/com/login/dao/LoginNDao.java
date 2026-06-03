package com.login.dao;

import static common.JDBCTemplate.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.login.dto.LoginNDto;


public class LoginNDao {

	public LoginNDto login(String id, String pw) {
		
		Connection con = getConnection();
		PreparedStatement pstm = null;
		ResultSet rs = null;
		LoginNDto res = new LoginNDto();
		
		String sql = " SELECT * FROM NLOGIN WHERE MYID=? AND MYPW=? ";
		
		try {
			pstm = con.prepareStatement(sql);
			pstm.setString(1, id);
			pstm.setString(2,pw);
			System.out.println("3.query 준비: " + sql);
			
			rs = pstm.executeQuery();
			System.out.println("4.queryt 준비");
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
			close(con);
			System.out.println("5.db 종료\n");
		}
		
		return res;
	}
}
