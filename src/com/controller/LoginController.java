package com.controller;

import java.io.IOException;
import java.io.PrintWriter;

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
			String requiredCheck = request.getParameter("requiredCheck");
			String nameCheck = request.getParameter("nameCheck");
			String locationCheck = request.getParameter("locationCheck");
			String personalCheck = request.getParameter("personalCheck");

			response.sendRedirect(request.getContextPath() + "/regist/registform.jsp?requiredCheck="+requiredCheck+"&nameCheck="+nameCheck+"&locationCheck="+locationCheck+"&personalCheck="+personalCheck);
		}else if(command.equals("regist")) {
			String id = request.getParameter("id");
			id = id.toUpperCase();
			String pw = request.getParameter("pw");
			String email = request.getParameter("email");
			String name = request.getParameter("name");
			int birth = Integer.parseInt(request.getParameter("birth"));
			String mob = request.getParameter("mob");
			String gender = request.getParameter("gender");
			String nation = request.getParameter("nation");
			String phone = request.getParameter("phone");
			String requiredCheck = request.getParameter("requiredCheck");
			String nameCheck = request.getParameter("nameCheck");
			String locationCheck = request.getParameter("locationCheck");
			String personalCheck = request.getParameter("personalCheck");
			
			int res =service.regist(id, pw, email, name, birth, mob, gender, nation, phone, requiredCheck, nameCheck, locationCheck, personalCheck);

			if(res >0) {
				PrintWriter out = response.getWriter();

			    out.println("<script>");
			    out.println("alert('회원가입에 성공했습니다.');");
			    out.println(
			        "location.href='" +
			        request.getContextPath() +
			        "/index.html';"
			    );
			    out.println("</script>");
			}else {
				PrintWriter out = response.getWriter();
				out.println("<script> alert('오류가 발생하였습니다. 다시 시도해주세요.');");
			}
			
		}else if(command.equals("idcheck")) {
		    response.setContentType("text/plain; charset=UTF-8");

		    String id = request.getParameter("id");
		    id = id.toUpperCase();

		    boolean res = service.idCheck(id);

		    PrintWriter out = response.getWriter();

		    if (res) {
		        out.print("duplicate");
		    } else {
		        out.print("available");
		    }
		}else if(command.equals("findidpage")) {
			response.sendRedirect(request.getContextPath() + "/find/findidform.jsp");
		}else if(command.equals("findpwpage")) {
			response.sendRedirect(request.getContextPath() + "/find/findpwform.jsp");
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
		}else if(command.equals("findidcode")){
			String id = request.getParameter("id");
			String name = request.getParameter("name");
			HttpSession session = request.getSession();
			String code = "123456"; //임시 인증 코드 생성
			long expireTime = System.currentTimeMillis() + (5 * 60 * 1000); //세션 유지 시간 설정 300초

			session.setAttribute("findIdEmail", id);
			session.setAttribute("findIdPhone", id);
		    session.setAttribute("findIdName", name);
		    session.setAttribute("findIdCode", code);
		    session.setAttribute("findIdExpireTime", expireTime);	
		    
		    response.sendRedirect(request.getContextPath() + "/find/findidcode.jsp");
		}
	}

}
