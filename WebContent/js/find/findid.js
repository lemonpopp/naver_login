let idChk = false;

const idBox = document.getElementById("id_input");
const nameBox = document.getElementById("name_input");
const findIdBtn = document.getElementById("find_id_btn");

/*에러 메시지*/
const errorNull = document.getElementById("error_null");
const errorType = document.getElementById("error_type");
const errorName = document.getElementById("error_name");

function findId(){
	const emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
	const phonePattern = /^01[01][0-9]{8}$/;
	const idValue = idBox.value;
	
	
	if(idChk === false){
		//이메일 미입력 시
		if(idValue.length === 0){
			errorNull.style.display = "block";
			errorType.style.display = "none";
			idBox.focus();
			idBox.style.border = "2px solid red";
			idBox.style.color = "red";
			return false;
		//이메일 || 전화번호 형식이 아닐경우
		}else if(!phonePattern.test(idValue) && !emailPattern.test(idValue)){
			errorNull.style.display = "none";
			errorType.style.display = "block";
			idBox.focus();
			idBox.style.border = "2px solid red";
			idBox.style.color = "red";
			return false;
		//올바른 형식일 경우
		}else{
			errorNull.style.display = "none";
			errorType.style.display = "none";
			idBox.style.border = "2px solid #bbbbc4";
			idBox.style.color = "black";
			idChk = true;
			nameBox.type = "text";		
			return false;

		}
	}
	
	const nameValue = nameBox.value.trim();

	if (nameValue.length === 0) {
		if(idValue.length === 0){
			errorNull.style.display = "block";
			errorType.style.display = "none";
			errorName.style.display = "none";
			idBox.focus();
			idBox.style.border = "2px solid red";
			idBox.style.color = "red";
			nameBox.style.border = "2px solid #bbbbc4";
			nameBox.style.color = "black";
			return false;

		}else if(!phonePattern.test(idValue) && !emailPattern.test(idValue)){
			errorNull.style.display = "none";
			errorType.style.display = "block";
			errorName.style.display = "none";
			idBox.focus();
			idBox.style.border = "2px solid red";
			idBox.style.color = "red";
			nameBox.style.border = "2px solid #bbbbc4";
			nameBox.style.color = "balck";
			return false;

		}else{
			errorNull.style.display = "none";
			errorType.style.display = "none";
			errorName.style.display = "block";
			nameBox.style.border = "2px solid red";
			nameBox.style.color = "red";
			nameBox.focus();
			return false;					
		}
	}
	
	return true;

}