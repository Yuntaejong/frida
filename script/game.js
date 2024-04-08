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

//letter .name 색상 지정

// 이미지 요소를 가져옵니다.
var letterElements = document.querySelectorAll('.letter');

// 각 요소에 대해 처리합니다.
letterElements.forEach(function(letterElement) {
	// 이미지 요소를 찾습니다.
	var imgElement = letterElement.querySelector('img');
	// 이미지 경로에서 숫자를 추출합니다.
	var imgSrc = imgElement.getAttribute('src');
	var number = imgSrc.match(/\d+/)[0];
    
	// 해당 숫자에 따라 배경색을 설정합니다.
	var nameElement = letterElement.querySelector('.name');
	switch (parseInt(number)) {
		case 1:
			nameElement.style.backgroundColor = '#FF8AC0';
			nameElement.style.boxShadow = '0 0 16px #FF8AC0CC';
			break;

		case 2:
			nameElement.style.backgroundColor = '#17BEDA';
			nameElement.style.boxShadow = '0 0 16px #17BEDACC';
			break;

		case 3:
			nameElement.style.backgroundColor = '#FFEB4E';
			nameElement.style.boxShadow = '0 0 16px #FFEB4ECC';
			break;

		case 4:
			nameElement.style.backgroundColor = '#FF7550';
			nameElement.style.boxShadow = '0 0 16px #FF7550CC';
			break;

		case 5:
			nameElement.style.backgroundColor = '#8AD63E';
			nameElement.style.boxShadow = '0 0 16px #8AD63ECC';
			break;
		// 필요한 만큼 추가합니다.
		default:
			break;
	}
});

//편지쓰기

	const letter = document.getElementById('letter');
	const total = document.getElementById('total-wrap');
	const totalLetter = document.getElementById('total-letter');
	const writerLetter = document.getElementById('writer-letter');
	const writedLetter = document.getElementById('writed-letter');
	const letterPad = document.querySelector('.writer-pad');
	const letterPadImg = document.querySelector('.writer-pad img');

	//버튼
	const completeBtn1 = document.querySelector('.btn-wrap .btn-complete');
	const completeBtn2 = document.querySelector('.btn-complete2');
	const saveBtn = document.querySelector('.btn-save');
	const modifyBtn = document.querySelector('.btn-modify');
	const closeBtn = document.querySelector('.close-btn');

	const prevBtn = document.querySelector('.prev-btn');
	const nextBtn = document.querySelector('.next-btn');

	letter.addEventListener('click',()=>{
		writerLetter.style.display = 'block';
	});

	completeBtn2.addEventListener('click',()=>{
		writerLetter.style.display = 'none';
		writedLetter.style.display = 'block';
	});
	completeBtn1.addEventListener('click',()=>{
		writedLetter.style.display = 'none';
	});

	//편지지 바꾸기
	let n = 1;

	prevBtn.addEventListener('click',()=>{
		moveLeft();
		return false;
	});

	nextBtn.addEventListener('click',()=>{
		moveRight();
		return false;
	});

	function moveLeft() {
		if(n==1) {
			n=3;
		} else {
			n--;
		}
		letterPadImg.src=`./images/game/writer-pad${n}.png`
	}

	function moveRight() {
		if(n==3) {
			n=1;
		} else {
			n++;
		}
		letterPadImg.src=`./images/game/writer-pad${n}.png`
	}

	total.addEventListener('click',()=>{
		totalLetter.style.display = 'block';
	});

	closeBtn.addEventListener('click',()=>{
		totalLetter.style.display = 'none';
	});


