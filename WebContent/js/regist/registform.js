let idChkType = false;
let idChkNull = false;
let pwChk = false;
let emailChk = false;

let nameChkNull = false;
let nameChkType = false;

const idBox = document.getElementById("id_input");
const pwBox = document.getElementById("pw_input");
const emailBox = document.getElementById("email_input");

const nameBox = document.getElementById("name_input");


/*에러 메시지*/
const errorTypeId = document.getElementById("error_id_type");
const errorTypeNull = document.getElementById("error_id_null");
const errorPW = document.getElementById("error_pw");
const errorEmail = document.getElementById("error_email");

const errorNameNull = document.getElementById("error_name_null");
const errorNameType = document.getElementById("error_name_type");

/*ID 박스 에러 체크*/
idBox.addEventListener("change", function() {
	
	const idPattern = /^[a-z0-9_-]{5,20}$/;
	const idValue = idBox.value;
	
	// 아이디를 입력하지 않은 경우
	if (idValue.length === 0) {
	    errorTypeNull.style.display = "list-item";
	    errorTypeId.style.display = "none";
		idBox.style.border = "2px solid red";
		idBox.style.color = "red";
		
	    idChkNull = false;
	    idChkType = false;

	// 아이디 형식이 잘못된 경우
	} else if (!idPattern.test(idValue)) {
	    errorTypeNull.style.display = "none";
	    errorTypeId.style.display = "list-item";
		idBox.style.border = "2px solid red";
		idBox.style.color = "red";
		
	    idChkNull = true;
	    idChkType = false;

	// 아이디가 정상인 경우
	} else {
	    errorTypeNull.style.display = "none";
	    errorTypeId.style.display = "none";
		idBox.style.border = "2px solid #868694";
		idBox.style.color = "black";
		
	    idChkNull = true;
	    idChkType = true;
	}
});

/*PW 박스 에러 체크*/
pwBox.addEventListener("change",function(){
	const pwPattern =
	    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])[!-~]{8,16}$/;
	const pwValue = pwBox.value;
	
	if(pwPattern.test(pwValue)){
		errorPW.style.display = "none";
		pwBox.style.border = "2px solid #868694";
		pwBox.style.color = "black";
		
		pwChk = true;
	}else{
		errorPW.style.display = "list-item";
		pwBox.style.border = "2px solid red";
		pwBox.style.color = "red";
				
		pwChk = false;
	}	
	
});

/*EMAIL 박스 에러 체크*/
emailBox.addEventListener("change",function(){
	const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
	const emailValue = emailBox.value;
	
	if(emailPattern.test(emailValue)){
		errorEmail.style.display = "none";
		emailBox.style.border = "2px solid #868694";
		emailBox.style.color = "black";
				
		emailChk = true;
	}else{
		errorEmail.style.display = "list-item";
		emailBox.style.border = "2px solid red";
		emailBox.style.color = "red";
						
		emailChk = false;
	}
});

/*NAME 박스 에러 체크*/
nameBox.addEventListener("change",function(){
	const namePattern = /^[가-힣A-Za-z]+$/;
	const nameValue = nameBox.value;
	
	if(nameValue.length === 0){
		errorNameNull.style.display = "list-item";
		errorNameType.style.display = "none";
		nameBox.style.border = "2px solid red";
		nameBox.style.color = "red";
		
		nameChkNull = false;
		nameChkType = false;
	}else if(!namePattern.test(nameValue)){
		errorNameNull.style.display = "none";
		errorNameType.style.display = "list-item";
		nameBox.style.border = "2px solid red";
		nameBox.style.color = "red";
				
		nameChkNull = true;
		nameChkType = false;
	}else{
		errorNameNull.style.display = "none";
		errorNameType.style.display = "none";
		nameBox.style.border = "2px solid #868694";
		nameBox.style.color = "black";
						
		nameChkNull = true;
		nameChkType = true;
	}
});
