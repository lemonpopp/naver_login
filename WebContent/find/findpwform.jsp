<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/find/findPW.css">

</head>
<body>
<div id="wrap" class="wrap">
		<div id="header" class="header">
			<a id="header_logo" href="${pageContext.request.contextPath}/controller.do?command=indexpage">N</a>
			<a id="header_logo_text" href="${pageContext.request.contextPath}/controller.do?command=indexpage">로그인</a>
		</div>
		<div id="container">
			<div id="context">
				<div id="context_title">비밀번호 찾기</div>
				<div id="context_subtitle">아이디를 입력해주세요.</div>
				<div id="find_pw_form_wrap">
					<form action="${pageContext.request.contextPath}/controller.do" method="post" onsubmit="return findpw();">
						<input type="hidden" name="command" value="">
						<div id="id_box">
							<input type="text" id="id_input" name="id" placeholder="전화번호 또는 본인확인 이메일">
						</div>	
						<div id="error_box">
							<div id="error_null">입력창을 채워주세요.</div>
							<div id="error_type">가입된 아이디가 아닙니다. 다시 확인해 주세요.</div>
						</div>
						<div id="find_pw_btn_box">
							<input id="find_pw_btn" type="submit" value="다음">
						</div>		
					</form>
				</div>
				<div id="find_id_help"><a href="${pageContext.request.contextPath}/controller.do?command=findidpage">아이디가 기억나지 않나요?</a></div>
			</div>
		</div>
	</div>	
</body>
</html>