<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/regist/agree.css">
<script src="${pageContext.request.contextPath}/js/regist/agree.js"></script>
</head>
<body>
	<div id="wrap" class="wrap">
		<div id="header" class="header">
			<a id="header_logo" href="${pageContext.request.contextPath}/controller.do?command=indexpage">N</a>
		</div>
		<div id="container">
			<div id="context">
				<form id="agree_form" action="${pageContext.request.contextPath}/controller.do?command=registform" method="post">
					<input type="hidden" id="required_check" name="requiredCheck" value="N">
					<input type="hidden" id="name_check" name="nameCheck" value="N">
					<input type="hidden" id="location_check" name="locationCheck" value="N">
					<input type="hidden" id="personal_check" name="personalCheck" value="N">
					<div id="all_agree">	
						<div class ="checkarea" onclick="allcheck()">						
							<div class="check_box" id="all_check_box" aria-checked="false"></div>
							<span class="all_check_text">전체 동의하기</span>
						</div>									
					</div>
						<div class="all_agree_text">실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택), 이벤트・혜택 정보 수신(선택) 동의를 포함합니다.</div>
					<div class="agree_box">	
						<div class ="checkarea" onclick="requiredcheck()">	
							<div class="check_box" id="required_check_box" aria-checked="false"></div>
							<span class="required_text">필수</span> <span class="check_text">N 이용약관</span> 
						</div>
						<a class="allow_link" href="${pageContext.request.contextPath}/regist/policy.jsp">보기</a>
					</div>
					<div class="agree_box">						
						<div class ="checkarea" onclick="namecheck()">
							<div class="check_box" id="name_check_box"></div><span class="selected_text">선택</span><span class="check_text">실명 인증된 아이디로 가입</span>
						</div>
					</div>
					<div class="agree_box">
						<div class ="checkarea" onclick="locationcheck()">						
							<div class="check_box"  id="location_check_box"></div><span class="selected_text">선택</span><span class="check_text">위치기반서비스 이용약관</span> 
						</div>
							<a class="allow_link" href="${pageContext.request.contextPath}/regist/policy.jsp">보기</a>
					</div>
					<div>
						<div class="agree_box">	
							<div class ="checkarea" onclick="personalcheck()">					
								<div class="check_box" id="personal_check_box" aria-checked="false"></div><span class="selected_text">선택</span> <span class="check_text">개인정보 수집 및 이용</span> 
							</div>
								<a class="allow_link" href="${pageContext.request.contextPath}/regist/policy.jsp">보기</a>
						</div>
							<div class="ad_check_box" onclick="adcheck()"><span id="ad_check_btn" class="ad_check_btn" aria-checked="false">✔</span> <span>광고성 정보 수신 동의</span></div>
					</div>
					<ul>
						<li>
						<div id="policy_btn"  onclick="policy()" aria-checked="false">개인정보 수집 및 이용 안내 <span></span></div>
						<div id="policy_box">회원 가입 과정에서 개인정보 보호법 제15조제1항제4호(계약 체결/이행)에 따라, 다음과 같은 개인정보를 수집·이용합니다.<br><br>
											
											수집하는 개인정보 항목 :<br>
											[필수] 아이디, 비밀번호, 이름, 생년월일, 성별, 휴대전화번호, 실명 인증된 아이디로 가입 시 연계정보(CI), 중복가입 확인정보(DI), 내외국인 정보, 만14세 미만 아동의 경우 법정대리인정보 (법정대리인의 이름, 생년월일, 성별, 중복가입확인정보(DI), 휴대전화번호)<br>
											[선택] 이메일주소, 프로필 정보<br><br>

											※ 선택 항목은 입력하지 않아도 회원 가입이 가능하며 회원 가입 이후 자유롭게 등록 가능합니다.</div>
						
						</li>
					</ul>
					<div id="error">
						<div id="ad_error">광고 수신을 위해 광고성 정보 수신에 동의해주세요.</div>
						<div id="personal_error">광고 수신을 위해 개인정보 수집 및 이용에 동의해주세요.</div>
					</div>
					<div id="agree_btn_box">
							<input id="agree_btn" type="submit" disabled="disabled" value="다음">
					</div>
				</form>
				
			</div>
		</div>
	</div>
</body>
</html>