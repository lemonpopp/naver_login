<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="./css/login.css">
<script src="js/loginPage.js"></script>
</head>
<body>
	<div id="wrap" class="wrap">
		<div id="header" class="header">
			<a id="header_logo" href="controller.do?command=indexpage">N</a>
		</div>
		<div id="container">
			<div id="login_wrap">
				<div id="menu_wrap">ID/전화번호</div>
				<div id="login_form_wrap">				
					<form id="login_form" action="controller.do" method="post" onsubmit="return loginCheck();">
						<input type="hidden" name="command" value="login">
						<input type="hidden" id="loginFail" value="<%= session.getAttribute("loginFail") %>">
						<% session.removeAttribute("loginFail"); %>
						<div class="login_box">
							<input type="text" name="myid" id="myid" placeholder=" ">
							<label for="myid">아이디 또는 전화번호</label>
						</div>
						<div class="login_box">
							<input type="password" name="mypw" id="mypw" placeholder=" ">
							<label for="mypw">비밀번호</label>
						</div>
						<div class="login_error" id="err_empty_id"><strong>아이디 또는 전화번호</strong>를 입력해 주세요.</div>
						<div class="login_error" id="err_empty_pw"><strong>비밀번호</strong>를 입력해 주세요.</div>
						<div class="login_error" id="err_passkey"><strong>패스키</strong>는 현재 준비중입니다.<br><strong>아이디 또는 전화번호</strong> 로그인을 시도해주세요.</div>
						<div class="login_error" id="err_not_login">아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.</div>
						
						<div id="login_btn_box">
							<input id="login_btn" type="submit" value="로그인">
						</div>
						<div id="pass_btn_msg">지문 얼굴 인증을 설정했다면</div>
						<div id="pass_btn_box">
							<button type="button" id="pass_btn" onclick="passBtn()">패스키 로그인</button>
						</div>
					</form>
				</div>
			</div>
			<div id="login_help_box">
				<a id="findid_btn" href="controller.do?command=findidpage" target="_blank">아이디 찾기</a>
				<a id="findpw_btn" href="controller.do?command=findpwpage" target="_blank">비밀번호 찾기</a>
				<a id="regist_btn" href="controller.do?command=registpage" target="_blank">회원가입</a>
			</div>
		</div>
	</div>
</body>
</html>   