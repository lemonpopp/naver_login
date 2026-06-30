<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/find/findIDCode.css">
</head>
<body>
	<div id="wrap" class="wrap">
		<div id="header" class="header">
			<a id="header_logo" href="${pageContext.request.contextPath}/controller.do?command=indexpage">N</a>
			<a id="header_logo_text" href="${pageContext.request.contextPath}/controller.do?command=indexpage">로그인</a>
		</div>
		<div id="container">
			<div id="title">			
				<div>메일/문자을(를) 발송했어요</div>
				<div>인증번호를 입력해주세요</div>
			</div>
			<div id="context">
				<div>
					<div id="codebox1"></div>
					<div id="codebox2"></div>
					<div id="codebox3"></div>
					<div id="codebox4"></div>
					<div id="codebox5"></div>
					<div id="codebox6"></div>
				</div>
				<div>
					<div>6자리를 모두 채워주세요</div>
				</div>
				<div>
					<div>재전송</div>
					<button>다음</button>
				</div>
				<div>
					<div>남은시간</div>
					<div>❓</div>
					<div>시간연장</div>				
				</div>
			</div>
		</div>
	</div>
</body>
</html>