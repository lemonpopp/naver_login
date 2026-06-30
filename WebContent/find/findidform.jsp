<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/find/findID.css">
<script defer src="${pageContext.request.contextPath}/js/find/findid.js"></script>

</head>
<body>
	<div id="wrap" class="wrap">
		<div id="header" class="header">
			<a id="header_logo" href="${pageContext.request.contextPath}/controller.do?command=indexpage">N</a>
			<a id="header_logo_text" href="${pageContext.request.contextPath}/controller.do?command=indexpage">로그인</a>
		</div>
		<div id="container">
			<div id="context">
				<div id="context_title">아이디 찾기</div>
				<div id="context_subtitle">전화번호나 이메일을 입력해주세요.</div>
				<div id="find_id_form_wrap">
					<form action="${pageContext.request.contextPath}/controller.do" method="post" onsubmit="return findId();">
						<input type="hidden" name="command" value="findidcode">
						<div id="id_box">
							<input type="text" id="id_input" name="id" placeholder="전화번호 또는 본인확인 이메일">
						</div>
						<div id="name_box">
							<input type="hidden" id="name_input" name="name" placeholder="이름">
						</div>		
						<div id="error_box">
							<div id="error_null">입력창을 채워주세요.</div>
							<div id="error_type">정보를 정확히 입력해 주세요. 전화번호라면 숫자만 입력해 주세요.</div>
							<div id="error_name">입력창을 채워주세요.</div>
						</div>
						<div id="find_id_btn_box">
							<input id="find_id_btn" type="submit" value="다음">
						</div>		
					</form>
				</div>
			</div>
		</div>
	</div>	
</body>
</html>