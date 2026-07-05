<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/find/findIDCode.css">
<script defer src="${pageContext.request.contextPath}/js/find/findidcode.js"></script>

</head>
<body>
	<div id="wrap" class="wrap">
		<div id="header" class="header">
			<a id="header_logo" href="${pageContext.request.contextPath}/controller.do?command=indexpage">N</a>
			<a id="header_logo_text" href="${pageContext.request.contextPath}/controller.do?command=indexpage">로그인</a>
		</div>
		<div id="container">
			<div id="title">			
				<div id="maintitle">메일/문자을(를) 발송했어요</div>
				<div id="subtitle">인증번호를 입력해주세요</div>
			</div>
			<div id="context">
				<div id="codebox">
					<div class="code_input_box" id="codebox1" contenteditable="true" maxlength="1"></div>
					<div class="code_input_box" id="codebox2" contenteditable="true" maxlength="1"></div>
					<div class="code_input_box" id="codebox3" contenteditable="true" maxlength="1"></div>
					<div class="code_input_box" id="codebox4" contenteditable="true" maxlength="1"></div>
					<div class="code_input_box" id="codebox5" contenteditable="true" maxlength="1"></div>
					<div class="code_input_box" id="codebox6" contenteditable="true" maxlength="1"></div>
				</div>
				<div>
					<div id="err_codebox">6자리를 모두 채워주세요</div>
				</div>
				<div id="btn_box">
					<div id="resend_btn">재전송</div>
					<button id="next_btn">다음</button>
				</div>
				<div id="time_box">
					<div id="time_text">남은시간 </div>
					<div id="timer"></div>
					<input type="hidden" id="expireTime" value="${sessionScope.findIdExpireTime}">
					<div id="time_info_btn">❓</div>
					<div id="time_extend_btn">시간연장</div>				
				</div>
			</div>
		</div>
	</div>
</body>
</html>