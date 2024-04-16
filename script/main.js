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

//PC,Tablet
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
		$("#main .main-content").css("z-index","1");
	} else {
		$("#main .main-content").css("z-index","2");
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

// 모바일
function handScroll_m() {
	//문서의 전체 높이
	var documentHeight = $(document).height();
	//브라우저 창 높이
	var windowHeight = $(window).height();

	//현재 페이지에서 스크롤된 백분율
	var scrolledPercentage = Math.ceil(($(this).scrollTop() / (documentHeight - windowHeight)) * 100);

	console.log("스크롤된 비율: " + scrolledPercentage + "%");

	// 프리다, 로고 움직이기
	if (scrolledPercentage < 11) {
		$(".scroll-left").css("left", "-30%");
		$(".scroll-right").css("right", "-67%");
		$(".scroll-up").css("bottom", "5%");
	}
	if (scrolledPercentage > 10 && scrolledPercentage < 19) {
		$(".scroll-left").css("left", "-50%");
		$(".scroll-right").css("right", "-87%");
		$(".scroll-up").css("bottom", "40%");
	}
	if (scrolledPercentage > 18 && scrolledPercentage < 27) {
		$(".scroll-left").css("left", "-70%");
		$(".scroll-right").css("right", "-100%");
		$(".scroll-up").css("bottom", "80%");
	}
	if (scrolledPercentage > 26) {
		$(".scroll-left").css("left", "-80%");
		$(".scroll-right").css("right", "-110%");
		$(".scroll-up").css({
			"bottom":"90%",
			"left":"20%",
		});
		setTimeout(()=>{
			$(".scroll-up").css("opacity","0");
		},100);
		$("#header").fadeIn();
		$("h1").fadeIn();
	} else {
		$("#header").fadeOut();
		$("h1").fadeOut();
		$(".scroll-up").css({
			"opacity":"1",
			"left":"50%"
		});
		
	}
	if (scrolledPercentage > 28) {
		$(".scroll-left").css("left", "-100%");
		$(".scroll-right").css("right", "-130%");
		$("#main .main-content").css("z-index","1");
	} else {
		$("#main .main-content").css("z-index","2");
	}
}

document.addEventListener("DOMContentLoaded", function() {
	
	const navInput = document.querySelector('.hambuger input');
	const hambuger = document.querySelector('.hambuger');
	const gnb = document.querySelector('.gnb');
	const gnbItems = document.querySelectorAll('.gnb li a');

	// 실행
	if(document.body.clientWidth < 768 ) {
		window.addEventListener("scroll", handScroll_m);
		gnbItems.forEach(function(item) {
			item.addEventListener('click', function() {
				navInput.checked = false;
				gnb.classList.remove('active');
				hambuger.classList.remove('active');
			});
		});
	} else {
		window.addEventListener("scroll", handScroll);
	}

	mobileSize();

	function mobileSize(){
		const body = document.querySelector('body');
		var realSize = window.innerWidth;
		body.style.width = realSize;
		console.log("디바이스 실사이즈:"+realSize);
		console.log("디바이스 실사이즈:"+body.style.width);
	}

	
	navInput.addEventListener('change',function(){
		if(this.checked) {
			gnb.classList.add('active');
			hambuger.classList.add('active');
			document.getElementById('header').style.zIndex = '11';
		} else {
			gnb.classList.remove('active');
			hambuger.classList.remove('active');
			setTimeout(()=>{
				document.getElementById('header').style.zIndex = '10';
			},500);
			
		}
	});	

	//타이핑 효과
	const TypeWraps = document.querySelectorAll('.type-wrap');
	function showNextSpan(typeWrapIndex, spanIndex) {
		TypeWraps[0].querySelector('span').classList.add('show');
		if (typeWrapIndex < TypeWraps.length) {
			const spans = TypeWraps[typeWrapIndex].querySelectorAll('span');
			if (spanIndex < spans.length) {
				setTimeout(() => {
					spans[spanIndex].classList.add('show');
					showNextSpan(typeWrapIndex, spanIndex + 1);
				},100); // 0.3초 후에 다음 span 보이기
			} else {
				// 현재 type-wrap의 모든 span이 보여지면 다음 type-wrap으로 이동
				setTimeout(() => {
					showNextSpan(typeWrapIndex + 1, 0);
				}, 300);
			}
		} else {
			// 모든 type-wrap을 보여준 후에 모든 span의 show 클래스 제거
			TypeWraps.forEach(typeWrap => {
				const spans = typeWrap.querySelectorAll('span');
				spans.forEach(span => {
					setTimeout(() => {
						span.classList.remove('show');
					}, 500);
				});
			});
			// 애니메이션이 다시 시작되도록 호출
			showNextSpan(0, 0);
		}
	}

	showNextSpan(0, 0); // 페이지 로딩 후 첫 번째 type-wrap과 첫 번째 span부터 시작
});


