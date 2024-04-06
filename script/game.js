const startPage = document.getElementById('start-page');
const mainPage = document.getElementById('main-page');
const startLetter = document.getElementById('letter-wrap');
const subTitle = document.querySelector('.sub-title');
const MainTitle = document.querySelector('.typing-effect');
const contentWrap = document.getElementById('content-wrap');


startLetter.addEventListener('click',()=>{
	startLetter.classList.add('moveLetter');
	startLetter.style.pointerEvents = "none";
	subTitle.classList.add('fadeOut');
	MainTitle.classList.add('fadeOut');
	let opacity = 0.8; // 초기 배경색의 투명도
	const step = 0.02; // 투명도를 조절할 단계 (더 작은 값으로 설정하면 부드럽게 변화됩니다.)
	const interval = 30; // 각 단계 사이의 간격 (밀리초 단위)

	const fadeOutInterval = setInterval(() => {
		opacity -= step;
		if (opacity <= 0) {
			clearInterval(fadeOutInterval);
			contentWrap.style.backgroundColor = "transparent"; // 배경색을 완전 투명으로 설정

			setTimeout(() => {
				startPage.style.display = "none";
				mainPage.style.display = "block";
			}, 3000); // 3초 후에 startPage를 숨기고 mainPage를 보여줍니다.
		} else {
			contentWrap.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // 투명도가 서서히 줄어들도록 설정
		}
	}, interval);
});

