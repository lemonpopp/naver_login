package com.controller;

import java.io.IOException;

import com.login.dao.UserDaoImpl;
import com.login.dto.UserDto;
import com.service.UserService;
import com.service.UserServiceImpl;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;


@WebServlet("/controller.do")
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public LoginController() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String command = request.getParameter("command");
		System.out.println("[command: "+ command + "]");
		
		UserService service = new UserServiceImpl();
				
		
		if(command.equals("loginpage")) {
			response.sendRedirect("login.jsp");
		}else if(command.equals("registpage")) {
			response.sendRedirect(request.getContextPath() + "/regist/agree.jsp");
		}else if(command.equals("registform")) {
			response.sendRedirect(request.getContextPath() + "/regist/registform.jsp");
		}else if(command.equals("findidpage")) {
			response.sendRedirect("findidform.jsp");
		}else if(command.equals("findpwpage")) {
			response.sendRedirect("findpwform.jsp");
		}else if(command.equals("indexpage")) {
			response.sendRedirect("index.html");
		}else if(command.equals("login")) {
			String id = request.getParameter("myid");
			String pw = request.getParameter("mypw");
			id = id.toUpperCase();
			UserDto dto = service.login(id,pw);
			
			if(dto.getMyid() != null){
				HttpSession session = request.getSession();
				session.setAttribute("dto",dto);
				session.setMaxInactiveInterval(60*60);	//세션 유지 시간 설정 3600초
				response.sendRedirect("user.jsp");	
			}else{
				HttpSession session = request.getSession();
				session.setAttribute("loginFail", "true");
				response.sendRedirect("login.jsp");
			}
		}
	}

}
