const timer = document.getElementById("timer");
const expireTimeInput = document.getElementById("expireTime");


let expireTime = Number(expireTimeInput.value);
let timerInterval;

function updateTimer() {
	const now = Date.now();
		const remainTime = expireTime - now;

		if (remainTime <= 0) {
			timer.textContent = "00:00";
			clearInterval(timerInterval);
			return;
		}

		const totalSeconds = Math.floor(remainTime / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		timer.textContent =
			String(minutes).padStart(2, "0")
			+ ":"
			+ String(seconds).padStart(2, "0");
}


updateTimer();

timerInterval = setInterval(updateTimer, 1000);


/*인증 번호 박스*/
const codebox = document.getElementById("codebox");

const codebox1 = document.getElementById("codebox1");
const codebox2 = document.getElementById("codebox2");
const codebox3 = document.getElementById("codebox3");
const codebox4 = document.getElementById("codebox4");
const codebox5 = document.getElementById("codebox5");
const codebox6 = document.getElementById("codebox6");

const codeBoxes = document.querySelectorAll(".code_input_box");

const nextBtn = document.getElementById("next_btn");
const errBoxEmp = document.getElementById("err_codebox");
const errBoxWrn = document.getElementById("err_codebox_wrong");

const findIdEmail = document.getElementById("findIdEmail").value;
const findIdPhone = document.getElementById("findIdPhone").value;
const findIdName = document.getElementById("findIdName").value;
const findIdCode = document.getElementById("findIdCode").value;

codebox.onclick = () => {
	if(codebox1.textContent.trim() === ""){
		codebox1.focus();
	}else if(codebox2.textContent.trim() === ""){
		codebox2.focus();
	}else if(codebox3.textContent.trim() === ""){
			codebox3.focus();
	}else if(codebox4.textContent.trim() === ""){
		codebox4.focus();
	}else if(codebox5.textContent.trim() === ""){
		codebox5.focus();
	}else if(codebox6.textContent.trim() === ""){
		codebox6.focus();
	}else{
		codebox6.focus();
	}
}

codeBoxes.forEach((box, index) => {
    box.addEventListener("input", () => {
        box.textContent = box.textContent.replace(/[^0-9]/g, "").slice(0, 1);

		if (box.textContent !== "") {
		    box.style.backgroundColor = "#d3edd3";
		} else {
		    box.style.backgroundColor = "white";
		}
		
        // 숫자를 입력하면 다음 칸으로 이동
        if (box.textContent !== "" && codeBoxes[index + 1]) {
            codeBoxes[index + 1].focus();
        }
    });

    box.addEventListener("keydown", (event) => {
        // 현재 칸이 비어 있을 때 Backspace를 누르면 이전 칸으로 이동
        if (
            event.key === "Backspace" &&
            box.textContent === "" &&
            codeBoxes[index - 1]
        ) {
			codeBoxes[index - 1].textContent = "";
            codeBoxes[index - 1].focus();
			codeBoxes[index - 1].style.backgroundColor = "white";
        }
    });
});


nextBtn.onclick = () => {
	if (
		codebox1.textContent.trim() === "" ||
		codebox2.textContent.trim() === "" ||
		codebox3.textContent.trim() === "" ||
		codebox4.textContent.trim() === "" ||
		codebox5.textContent.trim() === "" ||
		codebox6.textContent.trim() === ""
	) {
		errBoxEmp.style.display = "block";
		errBoxWrn.style.display = "none";
		return;
	} else {
		errBoxEmp.style.display = "none";
	}
	
	let code = codebox1.textContent + codebox2.textContent + codebox3.textContent + codebox4.textContent + 
				codebox5.textContent + codebox6.textContent;

	if (code === findIdCode) {
		errBoxWrn.style.display = "none";

		const params = new URLSearchParams();

		phone = findIdPhone.slice(0, 3) + "-" +
				findIdPhone.slice(3, 7) + "-" +
				findIdPhone.slice(7);
		
		params.append("command", "findid");
		params.append("email", findIdEmail);
		params.append("phone", phone);
		params.append("name", findIdName);

		fetch("/login_n/controller.do", {
			method: "POST",
			headers: {
				"Content-Type":
					"application/x-www-form-urlencoded; charset=UTF-8"
			},
			body: params.toString()
		})
		.then(response => {
			if (!response.ok) {
				throw new Error("HTTP 오류: " + response.status);
			}

		return response.text();
		})
		.then(result => {
			console.log("서버 응답:", result);

			if (result.trim() === "") {
				throw new Error("서버 응답이 비어 있습니다.");
			}

		return JSON.parse(result);
		})
		.then(data => {
			console.log(data);

			if (data.success) {
				alert(
					"회원님의 아이디는 "
				    + data.findId
				    + " 입니다."
				);

			location.href = "/login_n/";
			} else {
				alert("일치하는 회원 정보가 없습니다.");
			}
		})
		.catch(error => {
			console.error(error);
			alert("오류가 발생했습니다.");
		});

	} else {
		errBoxWrn.style.display = "block";
	}
};


// 시간 연장 박스

const timeExtendBox = document.getElementById("time_extend_btn");
const contextPath = "/" + window.location.pathname.split("/")[1];


timeExtendBox.onclick = () => {
    fetch(
        contextPath + `/controller.do?command=extendfindidtime`,
        {
            method: "POST"
        }
    )
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 서버에서 새로 설정한 만료 시간 저장
            expireTime = Number(data.expireTime);

            // 혹시 기존 타이머가 종료된 상태라면 다시 실행
            clearInterval(timerInterval);
            updateTimer();
            timerInterval = setInterval(updateTimer, 1000);
			timeExtendBox.style.display="none";
        } else {
            alert("인증 시간이 만료되었습니다. 다시 인증해주세요.");
        }
    })
    .catch(error => {
        console.error(error);
        alert("시간 연장 중 오류가 발생했습니다.");
    });
};
