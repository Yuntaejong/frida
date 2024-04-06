var scope = [
    { sectionName: "blank", start: 0, end: 9 },
    { sectionName: "Book Trailer", start: 10, end: 14 },
    { sectionName: "Writer", start: 15, end: 41 },
    { sectionName: "Introduce", start: 42, end: 54 },
    { sectionName: "Game", start: 55, end: 74 },
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

    //gnb active 
    
}

