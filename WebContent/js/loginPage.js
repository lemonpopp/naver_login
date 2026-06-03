function passBtn() {
	document.getElementById("err_passkey").style.display = "block";
	document.getElementById("err_empty_id").style.display = "none";
	document.getElementById("err_empty_pw").style.display = "none";
	document.getElementById("err_not_login").style.display = "none";

}

function loginCheck(){
	let myid = document.getElementById("myid").value;
	let mypw = document.getElementById("mypw").value;
	document.getElementById("err_empty_id").style.display = "none";
	document.getElementById("err_empty_pw").style.display = "none";
	document.getElementById("err_passkey").style.display = "none";
	document.getElementById("err_not_login").style.display = "none";

	
	if(myid.trim()==""){
		document.getElementById("err_empty_id").style.display = "block";
		document.getElementById("myid").focus();
		return false;
	}else if(mypw.trim()==""){
		document.getElementById("err_empty_pw").style.display = "block";
		document.getElementById("mypw").focus();
		return false;
	}
	
	return true;
		
}

window.onload = function() {
	let loginFail = document.getElementById("loginFail").value;
	
	document.getElementById("err_empty_id").style.display = "none";
	document.getElementById("err_empty_pw").style.display = "none";
	document.getElementById("err_passkey").style.display = "none";
	document.getElementById("err_not_login").style.display = "none";
	
	if (loginFail === "true") {
		document.getElementById("err_not_login").style.display = "block";
	}
	
	//id / pw 입력 감지
	let myid = document.getElementById("myid");
	let mypw = document.getElementById("mypw");
	let loginBtn = document.getElementById("login_btn");

	myid.addEventListener("input", checkInput);
	mypw.addEventListener("input", checkInput);

	function checkInput() {
		if (myid.value.trim() !== "" && mypw.value.trim() !== "") {
			loginBtn.style.backgroundColor = "#2DB400";
		} else {
			loginBtn.style.backgroundColor = "#868694";
		}
	}
}