let idChkType = false;
let idChkNull = false;
let idDuplicateChk = false;
let pwChk = false;
let emailChk = false;

let nameChkNull = false;
let nameChkType = false;

let birthChkNull = false;
let birthChkType = false;

let phoneChkNull = false;
let phoneChkType = false;

let genderMaleChk =false;
let genderFemaleChk =false;

let nationLocalChk =false;
let nationForeignerChk =false;

let mobChk = false;

const idBox = document.getElementById("id_input");
const pwBox = document.getElementById("pw_input");
const emailBox = document.getElementById("email_input");

const nameBox = document.getElementById("name_input");
const birthBox = document.getElementById("birth_input");

const maleBox = document.getElementById("male_box");
const femaleBox = document.getElementById("female_box");

const localBox = document.getElementById("local_box");
const foreignerBox = document.getElementById("foreigner_box");

const phoneBox = document.getElementById("phone_input")

const mobSelect = document.getElementById("mob_select");

/*에러 메시지*/
const errorTypeId = document.getElementById("error_id_type");
const errorTypeNull = document.getElementById("error_id_null");
const errorIdUsed = document.getElementById("error_id_used");
const errorPW = document.getElementById("error_pw");
const errorEmail = document.getElementById("error_email");

const errorNameNull = document.getElementById("error_name_null");
const errorNameType = document.getElementById("error_name_type");

const errorBirthNull = document.getElementById("error_birth_null");
const errorBirthType = document.getElementById("error_birth_type");

const errorPhoneNull = document.getElementById("error_phone_null");
const errorPhoneType = document.getElementById("error_phone_type");

const errorGender = document.getElementById("error_gender");
const errorNation = document.getElementById("error_nation");

const genderInput = document.getElementById("gender_input");
const nationInput = document.getElementById("nation_input");

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
		errorIdUsed.style.display = "none";

	    idChkNull = false;
	    idChkType = false;

	// 아이디 형식이 잘못된 경우
	} else if (!idPattern.test(idValue)) {
	    errorTypeNull.style.display = "none";
	    errorTypeId.style.display = "list-item";
		idBox.style.border = "2px solid red";
		idBox.style.color = "red";
		errorIdUsed.style.display = "none";

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
		
		checkDuplicateId(idValue);
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
	
	if (emailValue.length === 0) {
	    errorEmail.style.display = "none";
	    emailBox.style.border = "2px solid #868694";
	    emailBox.style.color = "black";

	    emailChk = true;

	} else if (emailPattern.test(emailValue)) {
	    errorEmail.style.display = "none";
	    emailBox.style.border = "2px solid #868694";
	    emailBox.style.color = "black";

	    emailChk = true;

	} else {
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

/*BIRTH 박스 에러 체크*/
birthBox.addEventListener("change",function(){
	const birthPattern = /^[0-9]{8}$/;
	const birthValue = birthBox.value;
	
	if(birthValue.length === 0){
		errorBirthNull.style.display = "list-item";
		errorBirthType.style.display = "none";
		birthBox.style.border = "2px solid red";
		birthBox.style.color = "red";
		
		birthChkNull = false;
		birthChkType = false;
	}else if(!birthPattern.test(birthValue)){
		errorBirthNull.style.display = "none";
		errorBirthType.style.display = "list-item";
		birthBox.style.border = "2px solid red";
		birthBox.style.color = "red";
		
		birthChkNull = true;
		birthChkType = false;
	}else{
		errorBirthNull.style.display = "none";
		errorBirthType.style.display = "none";
		birthBox.style.border = "2px solid #868694";
		birthBox.style.color = "black";
		
		birthChkNull = true;
		birthChkType = true;
	}
});

/*PHONE 박스 에러 체크*/
phoneBox.addEventListener("change",function(){
	const phonePattern = /^01[01]-?[0-9]{4}-?[0-9]{4}$/;
	let phoneValue = phoneBox.value.replace(/-/g, "");
	
	if(phoneValue.length === 0){
		errorPhoneNull.style.display = "list-item";
		errorPhoneType.style.display = "none";
		phoneBox.style.border = "2px solid red";
		phoneBox.style.color = "red";
				
		phoneChkNull = false;
		phoneChkType = false;
	}else if(!phonePattern.test(phoneValue)){
		errorPhoneNull.style.display = "none";
		errorPhoneType.style.display = "list-item";
		phoneBox.style.border = "2px solid red";
		phoneBox.style.color = "red";
						
		phoneChkNull = true;
		phoneChkType = false;
	}else{
		phoneBox.value =
		            phoneValue.slice(0, 3) + "-" +
		            phoneValue.slice(3, 7) + "-" +
		            phoneValue.slice(7);
					
		errorPhoneNull.style.display = "none";
		errorPhoneType.style.display = "none";
		phoneBox.style.border = "2px solid #868694";
		phoneBox.style.color = "black";
						
		phoneChkNull = true;
		phoneChkType = true;	
	}
});

maleBox.addEventListener("click",function(){
	maleBox.style.border ="2px solid #32c900";
	maleBox.style.color ="#32c900";
	
	femaleBox.style.border ="2px solid #868694";
	femaleBox.style.color ="#868694";
	
	errorGender.style.display = "none";
	
	genderInput.value = "Male";

	genderMaleChk = true;
	genderFemaleChk = false;
});

femaleBox.addEventListener("click",function(){
	femaleBox.style.border ="2px solid #32c900";
	femaleBox.style.color ="#32c900";
	
	maleBox.style.border ="2px solid #868694";
	maleBox.style.color ="#868694";

	errorGender.style.display = "none";

	genderInput.value = "Female";
	
	genderMaleChk = false;
	genderFemaleChk = true;
});

localBox.addEventListener("click",function(){
	localBox.style.border ="2px solid #32c900";
	localBox.style.color ="#32c900";
	
	foreignerBox.style.border ="2px solid #868694";
	foreignerBox.style.color ="#868694";
	
	errorNation.style.display = "none";
	
	nationInput.value = "Local";
		
	nationLocalChk = true;
	nationForeignerChk = false;
});

foreignerBox.addEventListener("click",function(){
	foreignerBox.style.border ="2px solid #32c900";
	foreignerBox.style.color ="#32c900";
	
	localBox.style.border ="2px solid #868694";
	localBox.style.color ="#868694";
	
	errorNation.style.display = "none";
	
	nationInput.value = "Foreigner";
	
	nationLocalChk = false;
	nationForeignerChk = true;
});

mobSelect.addEventListener("change", function() {
    if (mobSelect.value === "") {
        mobSelect.style.border = "2px solid red";

        mobChk = false;
    } else {
        mobSelect.style.border = "2px solid #868694";

        mobChk = true;
    }
});

function registCheck() {
    if (!idChkType ||
        !idChkNull ||
		!idDuplicateChk ||
        !pwChk ||
        !nameChkNull ||
        !nameChkType ||
        !birthChkNull ||
        !birthChkType ||
		!mobChk	||
        !phoneChkNull ||
        !phoneChkType ||
        (!genderMaleChk && !genderFemaleChk) ||
        (!nationLocalChk && !nationForeignerChk)) {
			
			if(!idChkNull){
				errorTypeNull.style.display = "list-item";
				errorTypeId.style.display = "none";
				idBox.style.border = "2px solid red";
				idBox.style.color = "red";
			}else if(!idChkType){
				errorTypeNull.style.display = "none";
				errorTypeId.style.display = "list-item";
				idBox.style.border = "2px solid red";
				idBox.style.color = "red";
			}
			
			if(!pwChk){
				errorPW.style.display = "list-item";
				pwBox.style.border = "2px solid red";
				pwBox.style.color = "red";
			}
			
        
			if(!nameChkNull){
				errorNameNull.style.display = "list-item";
				errorNameType.style.display = "none";
				nameBox.style.border = "2px solid red";
				nameBox.style.color = "red";
			}else if(!nameChkType){
				errorNameNull.style.display = "none";
				errorNameType.style.display = "list-item";
				nameBox.style.border = "2px solid red";
				nameBox.style.color = "red";
			}
			
			if(!birthChkNull){
				errorBirthNull.style.display = "list-item";
				errorBirthType.style.display = "none";
				birthBox.style.border = "2px solid red";
				birthBox.style.color = "red";
			}else if(!birthChkType){
				errorBirthNull.style.display = "none";
				errorBirthType.style.display = "list-item";
				birthBox.style.border = "2px solid red";
				birthBox.style.color = "red";
			}
			
			if(!mobChk){
				mobSelect.style.border = "2px solid red";
			}
			
			if(!phoneChkNull){
				errorPhoneNull.style.display = "list-item";
				errorPhoneType.style.display = "none";
				phoneBox.style.border = "2px solid red";
				phoneBox.style.color = "red";
			}else if(!phoneChkType){
				errorPhoneNull.style.display = "none";
				errorPhoneType.style.display = "list-item";
				phoneBox.style.border = "2px solid red";
				phoneBox.style.color = "red";
			}
			
			if(!genderMaleChk && !genderFemaleChk){
				errorGender.style.display = "list-item";
				femaleBox.style.border ="2px solid red";
				femaleBox.style.color ="red";
				maleBox.style.border ="2px solid red";
				maleBox.style.color ="red";			}
			
			if(!nationLocalChk && !nationForeignerChk){
				errorNation.style.display = "list-item";
				foreignerBox.style.border ="2px solid red";
				foreignerBox.style.color ="red";				
				localBox.style.border ="2px solid red";
				localBox.style.color ="red";
			}
			
        return false;
    }

    return true;
}

//ID 중복 검사
function checkDuplicateId(idValue) {
    fetch(
        "../controller.do?command=idcheck&id=" + encodeURIComponent(idValue)
    )
    .then(function(response) {
        return response.text();
    })
    .then(function(result) {
        result = result.trim();

        if (result === "available") {
            // 사용 가능한 아이디
            errorIdUsed.style.display = "none";

            idBox.style.border = "2px solid #868694";
            idBox.style.color = "black";

            idDuplicateChk = true;

        } else if (result === "duplicate") {
            // 중복된 아이디
            errorIdUsed.style.display = "list-item";

            idBox.style.border = "2px solid red";
            idBox.style.color = "red";

            idDuplicateChk = false;
        }
    })
    .catch(function(error) {
        console.error(error);

    });
}

