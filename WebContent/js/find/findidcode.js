const timer = document.getElementById("timer");
const expireTimeInput = document.getElementById("expireTime");


const expireTime = Number(expireTimeInput.value);

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

const timerInterval = setInterval(updateTimer, 1000);


/*인증 번호 박스*/

const codebox1 = document.getElementById("codebox1");
const codebox2 = document.getElementById("codebox2");
const codebox3 = document.getElementById("codebox3");
const codebox4 = document.getElementById("codebox4");
const codebox5 = document.getElementById("codebox5");
const codebox6 = document.getElementById("codebox6");

const nextBtn = document.getElementById("next_btn");
const errBoxEmp = document.getElementById("err_codebox");

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
	} else {
		errBoxEmp.style.display = "none";
	}
};