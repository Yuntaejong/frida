var scope = [
	{ sectionName: "blank", start: 0, end: 33 },
	{ sectionName: "Book Trailer", start: 34, end: 50 },
	{ sectionName: "animation", start: 51, end:64},
	{ sectionName: "Writer", start: 65, end: 75 },
	{ sectionName: "Introduce", start: 76, end: 90 },
	{ sectionName: "Game", start: 91, end: 100 },
];

// 변수
const imgRight = document.querySelector(".scroll-right");
const imgLeft = document.querySelector(".scroll-left");

// 실행
window.addEventListener("scroll", handScroll);

function handScroll() {
	//문서의 전체 높이
	var documentHeight = $(document).height();
	//브라우저 창 높이
	var windowHeight = $(window).height();

	//현재 페이지에서 스크롤된 백분율
	var scrolledPercentage = Math.ceil(($(this).scrollTop() / (documentHeight - windowHeight)) * 100);

	console.log("스크롤된 비율: " + scrolledPercentage + "%");

	// 프리다, 로고 움직이기
	if (scrolledPercentage < 7) {
		$(".scroll-left").css("left", "0");
		$(".scroll-right").css("right", "0");
		$(".scroll-up").css("bottom", "10%");
	}
	if (scrolledPercentage > 8 && scrolledPercentage < 15) {
		$(".scroll-left").css("left", "-7%");
		$(".scroll-right").css("right", "-12%");
		$(".scroll-up").css("bottom", "10%");
	}
	if (scrolledPercentage > 16 && scrolledPercentage < 22) {
		$(".scroll-left").css("left", "-10%");
		$(".scroll-right").css("right", "-16%");
		$(".scroll-up").css("bottom", "20%");
	}
	if (scrolledPercentage > 23 && scrolledPercentage < 31) {
		$(".scroll-left").css("left", "-20%");
		$(".scroll-right").css("right", "-33%");
		$(".scroll-up").css("bottom", "50%");
	}
	if (scrolledPercentage > 32) {
		$(".scroll-left").css("left", "-30%");
		$(".scroll-right").css("right", "-50%");
		$(".scroll-up").css("bottom", "100%");
		$("#header").fadeIn();
		$("h1").fadeIn();
	} else {
		$("#header").fadeOut();
		$("h1").fadeOut();
	}
	if (scrolledPercentage > 44) {
		$(".scroll-left").css("left", "-50%");
		$(".scroll-right").css("right", "-70%");
	} 

	// gnb 클래스를 가진 요소 선택
	var gnb = document.querySelector('.gnb');

	function setActiveClass(sectionName) {
		// gnb 내의 모든 li 요소 선택
		var liElements = gnb.querySelectorAll('li');
		// 각 li 요소에 대해 반복
		liElements.forEach(function(li) {
			// 해당 섹션 이름과 li의 텍스트 컨텐츠가 일치하고, 해당 섹션이 'blank'나 'animation'이 아닌 경우에만 active 클래스 추가
			if (li.textContent.trim().toUpperCase() === sectionName.toUpperCase() && sectionName !== 'blank' && sectionName !== 'animation') {
				li.classList.add('active');
			} else {
				li.classList.remove('active');
			}
		});
	}
	
	// scope 배열 순회
	scope.forEach(function(section, index) {
		// 스크롤 위치가 해당 섹션 범위 내에 있는 경우 active 클래스 추가
		if (scrolledPercentage >= section.start && scrolledPercentage <= section.end) {
			setActiveClass(section.sectionName);
		}
	});

}


//타이핑 효과
const typeWraps = document.querySelectorAll('.type-wrap');

function showNextSpan(typeWrapIndex, spanIndex) {
	if (typeWrapIndex < typeWraps.length) {
		const spans = typeWraps[typeWrapIndex].querySelectorAll('span');
		if (spanIndex < spans.length) {
			setTimeout(() => {
				spans[spanIndex].classList.add('show');
				showNextSpan(typeWrapIndex, spanIndex + 1);
			}, 1000); // 1초 후에 다음 span 보이기
		} else {
			// 현재 type-wrap의 모든 span이 보여지면 다음 type-wrap으로 이동
			showNextSpan(typeWrapIndex + 1, 0);
		}
	}

	if(typeWrapIndex == typeWraps.length) {
		const spans = typeWraps[typeWrapIndex].querySelectorAll('span');
		spans[spanIndex].classList.remove('show');
	}
}

showNextSpan(0, 0); // 페이지 로딩 후 첫 번째 type-wrap과 첫 번째 span부터 시작