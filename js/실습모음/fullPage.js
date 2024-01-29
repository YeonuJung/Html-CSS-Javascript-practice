$(document).ready(function() {
    $('#fullpage').fullpage({
    // 옵션
    autoScrolling:true,
    scrollHorizontally: true,
    // 이곳에 필요한 옵션 추가
    navigation: true,
	navigationPosition: 'right',

    anchors: ['menu1', 'menu2', 'menu3', 'menu4'],
    sectionsColor: ["yellow", "orange", "blue", "green",]
    });
    }); 