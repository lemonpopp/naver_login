window.onload = function() {
	const allCheck = document.getElementById("all_check_box");
	const requiredCheck = document.getElementById("required_check_box");
	const nameCheck = document.getElementById("name_check_box");
	const locationCheck = document.getElementById("location_check_box");
	const personalCheck = document.getElementById("personal_check_box");
	
	const required_check = document.getElementById("required_check");
	const name_check = document.getElementById("name_check");
	const location_check = document.getElementById("location_check");
	const personal_check = document.getElementById("personal_check");

	const adCheck = document.getElementById("ad_check_btn");
	
	const adError = document.getElementById("ad_error");
	const personalError = document.getElementById("personal_error");

	//전체 동의하기
	window.allcheck = function(){
		const isChecked = allCheck.getAttribute("aria-checked") === "true";

		if(isChecked){
			//전체 동의 체크 상태
			allCheck.classList.remove("checked");
			requiredCheck.classList.remove("checked");
			nameCheck.classList.remove("checked");
			locationCheck.classList.remove("checked");
			personalCheck.classList.remove("checked");
			adCheck.classList.remove("checked");
					
			allCheck.setAttribute("aria-checked", "false");
			requiredCheck.setAttribute("aria-checked", "false");
			nameCheck.setAttribute("aria-checked", "false");
			locationCheck.setAttribute("aria-checked", "false");
			personalCheck.setAttribute("aria-checked", "false");
			adCheck.setAttribute("aria-checked", "false");
			
			required_check.value="N"
			name_check.value="N"
			location_check.value="N"
			personal_check.value="N"
		}else{
			//전체 동의 미체크 상태
			allCheck.classList.add("checked");
			requiredCheck.classList.add("checked");
			nameCheck.classList.add("checked");
			locationCheck.classList.add("checked");
			personalCheck.classList.add("checked");
			adCheck.classList.add("checked");
			
			allCheck.setAttribute("aria-checked", "true");
			requiredCheck.setAttribute("aria-checked", "true");
			nameCheck.setAttribute("aria-checked", "true");
			locationCheck.setAttribute("aria-checked", "true");
			personalCheck.setAttribute("aria-checked", "true");
			adCheck.setAttribute("aria-checked", "true");
			
			required_check.value="Y"
			name_check.value="Y"
			location_check.value="Y"
			personal_check.value="Y"
		}
		checkAdPersonalError();
		checkButtonActive();
	}
	
	//필수 약관 동의
	window.requiredcheck = function(){
		const isChecked = requiredCheck.getAttribute("aria-checked") === "true";
		
		if(isChecked){
			//필수 약관 체크 상태
			allCheck.classList.remove("checked");
			requiredCheck.classList.remove("checked");
			
			allCheck.setAttribute("aria-checked", "false");
			requiredCheck.setAttribute("aria-checked", "false");
			
			required_check.value="N";
		}else{
			//필수 약관 미체크 상태
			requiredCheck.classList.add("checked");
						
			requiredCheck.setAttribute("aria-checked", "true");
						
			required_check.value="Y";
		}
		
		checkButtonActive();
	}
	
	//실명 인증 동의
	window.namecheck = function(){
			const isChecked = nameCheck.getAttribute("aria-checked") === "true";
			
			if(isChecked){
				//필수 약관 체크 상태
				allCheck.classList.remove("checked");
				nameCheck.classList.remove("checked");
				
				allCheck.setAttribute("aria-checked", "false");
				nameCheck.setAttribute("aria-checked", "false");
				
				name_check.value="N";
			}else{
				//필수 약관 미체크 상태
				nameCheck.classList.add("checked");
							
				nameCheck.setAttribute("aria-checked", "true");
							
				name_check.value="Y";
			}
		}
		
		//위치기반 약관 동의
		window.locationcheck = function(){
			const isChecked = locationCheck.getAttribute("aria-checked") === "true";
					
			if(isChecked){
				//위치 기반 약관 체크 상태
				allCheck.classList.remove("checked");
				locationCheck.classList.remove("checked");
						
				allCheck.setAttribute("aria-checked", "false");
				locationCheck.setAttribute("aria-checked", "false");
						
				location_check.value="N";
			}else{
				//위치 기반 약관 미체크 상태
				locationCheck.classList.add("checked");
									
				locationCheck.setAttribute("aria-checked", "true");
									
				location_check.value="Y";
			}
		}
		
		//개인 정보 약관 동의
		window.personalcheck = function(){
			const isChecked = personalCheck.getAttribute("aria-checked") === "true";
							
			if(isChecked){
				//선택 개인 정보 약관 체크 상태
				allCheck.classList.remove("checked");
				personalCheck.classList.remove("checked");
								
				allCheck.setAttribute("aria-checked", "false");
				personalCheck.setAttribute("aria-checked", "false");
								
				personal_check.value="N";
				
			}else{
				//선택 개인 정보 약관 미체크 상태
				personalCheck.classList.add("checked");
											
				personalCheck.setAttribute("aria-checked", "true");
											
				personal_check.value="Y";		
				
			}
			checkAdPersonalError();
			checkButtonActive()
		}
		
		
		
		window.policy = function(){
			const policyBtn = document.getElementById("policy_btn");
			const policyBox = document.getElementById("policy_box");
			const isChecked = policyBtn.getAttribute("aria-checked") === "true";
			
			if(isChecked){
				policyBox.style.display="none";
				policyBtn.setAttribute("aria-checked", "false");
			}else{
				policyBox.style.display="block";
				policyBtn.setAttribute("aria-checked", "true");
			}
			
		}
		
		//광고성 약관 동의
		window.adcheck = function(){
			const isChecked = adCheck.getAttribute("aria-checked") === "true";
						
			if(isChecked){
				//광고성 정보 동의 체크 상태
				personalError.style.display="none";
				adCheck.setAttribute("aria-checked", "false");
				adCheck.classList.remove("checked");
			}else{
				//광고성 정보 동의 미체크 상태
				adCheck.setAttribute("aria-checked", "true");
				adCheck.classList.add("checked");
			}
			
			checkAdPersonalError();
			checkButtonActive()
		}
		
		//다음 버튼 동작
		function checkButtonActive() {
			const agreeBtn = document.getElementById("agree_btn");
			const personalIsChecked= personalCheck.getAttribute("aria-checked");
			const adCheckIsChecked = adCheck.getAttribute("aria-checked");
					
			if(required_check.value ==="Y" && (personalIsChecked ===  adCheckIsChecked)){
				agreeBtn.disabled = false;
				agreeBtn.style.backgroundColor = "#2DB400";
			}else{
				agreeBtn.disabled = true;
				agreeBtn.style.backgroundColor = "#868694";
			}
					
		}
		
		function checkAdPersonalError(){
			const personalIsChecked = personal_check.value === "Y";
			const adIsChecked = adCheck.getAttribute("aria-checked") === "true";

			if(personalIsChecked && !adIsChecked){
				// 개인정보는 체크 광고성 정보는 미체크
				adError.style.display = "block";
				personalError.style.display = "none";
			}else if(!personalIsChecked && adIsChecked){
				// 광고성 정보는 체크 개인정보는 미체크
				adError.style.display = "none";
				personalError.style.display = "block";
			}else{
				// 둘 다 체크 or 둘 다 미체크
				adError.style.display = "none";
				personalError.style.display = "none";
			}
		}
}