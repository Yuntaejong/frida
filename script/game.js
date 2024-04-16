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
	var stickerElement = letterElement.querySelector('.sticker-wrap');
	switch (parseInt(number)) {
		case 1:
			nameElement.style.backgroundColor = '#FF8AC0';
			nameElement.style.boxShadow = '0 0 16px #FF8AC0CC';
			stickerElement.style.boxShadow = '0 0 16px #FF8AC0CC';
			break;

		case 2:
			nameElement.style.backgroundColor = '#17BEDA';
			nameElement.style.boxShadow = '0 0 16px #17BEDACC';
			stickerElement.style.boxShadow = '0 0 16px #17BEDACC';
			break;

		case 3:
			nameElement.style.backgroundColor = '#FFEB4E';
			nameElement.style.boxShadow = '0 0 16px #FFEB4ECC';
			stickerElement.style.boxShadow = '0 0 16px #FFEB4ECC';
			break;

		case 4:
			nameElement.style.backgroundColor = '#FF7550';
			nameElement.style.boxShadow = '0 0 16px #FF7550CC';
			stickerElement.style.boxShadow = '0 0 16px #FF7550CC';
			break;

		case 5:
			nameElement.style.backgroundColor = '#8AD63E';
			nameElement.style.boxShadow = '0 0 16px #8AD63ECC';
			stickerElement.style.boxShadow = '0 0 16px #8AD63ECC';
			break;
		// 필요한 만큼 추가합니다.
		default:
			break;
	}
});

//편지쓰기

	const letter = document.getElementById('letter');
	const writerLetter = document.getElementById('writer-letter');
	const writedLetter = document.getElementById('writed-letter');
	const sendLetter = document.getElementById('send-letter');
	const applyModal = document.getElementById('apply-wrap');
	const letterPad = document.querySelector('.writer-pad');
	const letterPadImg = document.querySelector('.writer-pad img');
	const stickerImg = document.querySelector('.change-sticker-wrap img');

	//버튼
	const completeBtn1 = document.querySelector('.btn-wrap .btn-complete');
	const completeBtn2 = document.querySelector('.btn-complete2');
	const saveBtn = document.querySelector('.btn-save');
	const modifyBtn = document.querySelector('.btn-modify');
	const sendBtn = document.querySelector('.btn-send');

	const decoPrevBtn = document.querySelector('.change-pad .prev-btn');
	const decoNextBtn = document.querySelector('.change-pad  .next-btn');
	const stickerPrevBtn = document.querySelector('#send-letter .prev-btn');
	const stickerNextBtn = document.querySelector('#send-letter .next-btn');

	//
	letter.addEventListener('click',()=>{
		writerLetter.style.display = 'block';
	});

	completeBtn2.addEventListener('click',()=>{
		writerLetter.style.display = 'none';
		writedLetter.style.display = 'block';
	});
	completeBtn1.addEventListener('click',()=>{
		writedLetter.style.display = 'none';
		sendLetter.style.display = 'flex';
	});

	sendBtn.addEventListener('click',()=>{
		sendLetter.style.display = 'none';
		applyModal.style.display = 'flex';
	});

	//편지지 바꾸기
	let n = 1;

	decoPrevBtn.addEventListener('click',()=>{
		moveLeft();
		return false;
	});

	decoNextBtn.addEventListener('click',()=>{
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

	//스티커 바꾸기
	let j = 1;

	stickerPrevBtn.addEventListener('click',()=>{
		changeLeft();
		return false;
	});

	stickerNextBtn.addEventListener('click',()=>{
		changeRight();
		return false;
	});

	function changeLeft() {
		if(j==1) {
			j=5;
		} else {
			j--;
		}
		stickerImg.src=`./images/game/sticker${j}.png`
	}

	function changeRight() {
		if(j==5) {
			j=1;
		} else {
			j++;
		}
		stickerImg.src=`./images/game/sticker${j}.png`
	}

// 전체 편지
const total = document.getElementById('total-wrap');
const totalLetterWrap = document.querySelector('.total-letter-wrap');
const totalLetter = document.getElementById('total-letter');
const closedLetters = document.querySelectorAll('.letter-wrapper');
const openLetter = document.querySelector('.open-letter-wrap');
const letterRainElements = document.querySelectorAll('.letter-rain > *');

// 최신 편지
const currentLetters = document.querySelectorAll('.letter');
const currentLetterWrap = document.querySelector('.current-letter-wrap');

//버튼
const closeBtns = document.querySelectorAll('.close-btn');
const totalPrevBtn = document.querySelector('.total-prev-btn');


	total.addEventListener('click',()=>{
		totalLetter.style.display = 'block';
		totalLetterWrap.style.display = 'block';
	});

	closeBtns.forEach(function(closeBtn){
		closeBtn.addEventListener('click',()=>{
			totalLetter.style.display = 'none';
			currentLetterWrap.style.display = 'none';
			letterRainElements.forEach(function(element){
				element.classList.remove('rain');
			});
		});
	});


	closedLetters.forEach(function(wrapper){
		wrapper.addEventListener('click',()=>{
			openLetter.style.display = 'flex';
			totalLetterWrap.style.display = 'none';
			setTimeout(()=>{
				letterRainElements.forEach(function(element){
					element.classList.add('rain');
				});
			},100);
		});
	});

	totalPrevBtn.addEventListener('click',()=>{
		openLetter.style.display = 'none';
		totalLetterWrap.style.display = 'block';
		letterRainElements.forEach(function(element){
			element.classList.remove('rain');
		});
	});

	currentLetters.forEach(function(letter){
		letter.addEventListener('click',()=>{
			currentLetterWrap.style.display= 'flex';
		});
	});

//CheckBox 
	const inputAgree = document.getElementById('yes');
	const inputNotAgree = document.getElementById('no');
	const comfirmBtn = document.getElementById('confirm');

	const handleRadioClick = () => {
		if(inputAgree.checked){
			comfirmBtn.innerText = "확인";
			comfirmBtn.style.opacity = 1;
			comfirmBtn.style.visibility = 'visible';
		} else if (inputNotAgree.checked) {
			comfirmBtn.innerText = "종료";
			comfirmBtn.style.opacity = 1;
			comfirmBtn.style.visibility = 'visible';
		}
	}

	inputAgree.addEventListener('click', handleRadioClick);
	inputNotAgree.addEventListener('click', handleRadioClick);

	comfirmBtn.addEventListener('click',(event)=>{
		location.reload();
	});