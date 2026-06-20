<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/regist/registform.css">
<script defer src="${pageContext.request.contextPath}/js/regist/registform.js"></script>

</head>
<body>
	<div id="wrap" class="wrap">
		<div id="header" class="header">
			<a id="header_logo" href="${pageContext.request.contextPath}/controller.do?command=indexpage">N</a>
		</div>
		<div id="container">
			<div id="context">
				<div id="regist_form_wrap">
					<form action="" method="post">
						<div id="id_box">
							<input type="text" id="id_input" name="id" placeholder="아이디">
						</div>
						<div id="pw_box">
							<input type="password" id="pw_input" name="pw" placeholder="비밀번호" maxlength='16'>
						</div>
						<div id="email_box">
							<input type="text" id="email_input" name="email" placeholder="[선택] 이메일주소(비밀번호 찾기 등 본인 확인용)">
						</div>
						<div id="error_box">
							<ul class="error">
								<li id="error_id_null">아이디: 필수 정보입니다.</li>
								<li id="error_id_type">아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.</li>
								<li id="error_pw">비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</li>
								<li id="error_email">이메일: 이메일 주소가 정확한지 확인해 주세요.</li>
							</ul>
						</div>
						<div id="name_box">
							<input type="text" id="name_input" name="name" placeholder="이름">
						</div>
						<div id="birth_box">
							<input type="text" name="birth" placeholder="생년월일 8자리">
						</div>
						<div id="mob_box">
							  <select name="mob">
							    <option value="" selected disabled>통신사 선택</option>
							    <option value="SKT">SKT</option>
							    <option value="KT">KT</option>
							    <option value="LG">LG U+</option>
							  </select>
						</div>
						<div id="gender_nation_box">					
							<div id="gender_box">
								<span id="male_box">남자</span>
								<span id="female_box">여자</span>
							</div>
							<div id="nation_box">
								<span id="local_box">내국인</span>
								<span id="foreigner_box">외국인</span>
							</div>
						</div>
						<div id="info_error_box">
							<ul class="error">
								<li id="error_name_null">이름: 필수 정보입니다.</li>
								<li id="error_name_type">이름: 한글, 영문 대/소문자를 사용해 주세요. (특수기호, 공백 사용 불가)</li>
								<li>생년월일: 필수 정보입니다.</li>
								<li>생년월일: 생년월일은 8자리 숫자로 입력해 주세요.</li>
							</ul>
						</div>
						<div id="phone_box">
							<input type="text" name="phone" placeholder="휴대전화번호">
						</div>
						<div id="phone_erorr_box">
							<ul class="error">
								<li>휴대전화번호: 필수 정보입니다.</li>
								<li>휴대전화번호: 휴대전화번호가 정확한지 확인해 주세요.</li>							
							</ul>
						</div>
						<div id="regist_btn_box">
							<input id="regist_btn" type="submit" disabled="disabled" value="가입하기">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>