$(function() {

    //MENU NAV LIST
    let j = 0;
    
    let menuList = [
        {name: "STRONA GŁÓWNA", link: "index.html"},
        {name: "PORTFOLIO", link: "portfolio.html"},
        {name: "OFERTA", link: "oferta.html"},
        {name: "KONTAKT", link: "kontakt.html"}
    ];

    function menuAppend() {
        for (j=0; j<menuList.length; j++) {
            menuList[j].link;
            if(window.location.href.indexOf(menuList[j].link) != -1) {
                $("#main-menu").append(
                `<li class="nav-item"><a class="nav-link active" href="${menuList[j].link}"> ${menuList[j].name}</a></li>`
                );
            }
            else {
                $("#main-menu").append(
                    `<li class="nav-item"><a class="nav-link" href="${menuList[j].link}">${menuList[j].name} </a></li>`
                );
            }            
        }
    };

    menuAppend();
    

    //SCROLLING TO POINT
    $('a[href^="#"]').on('click', function(event) {

	var target = $( $(this).attr('href') );

	if( target.length ) {
		event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

    //SLIDER BANNER IMAGES
    let sliderList = [
    "slider_01.jpg", 
    "slider_02.jpg", 
    "slider_03.jpg",
    "slider_04.jpg",
    "slider_05.jpg"
    ]

    let i = 0

    let faderDelay = 1000; //fading effect duration
    let faderTime = 10000; //fading time interval
    $(".photo-slider").css("background-image", `url("img/${sliderList[i]}")`);
    //Image slider
    function slideOn() {
        $(".overlay-bk").animate({'opacity': 1}, faderDelay);
        setTimeout(slide, faderDelay);
    }

    //Trigger auto-slider
    $(".overlay-bk").css("opacity", "0");
    setTimeout(slideOn, faderTime)

    function slide() {
        if (i === sliderList.length-1) {
            i = 0
        }
        else {
            i++
        }
        
        $(".photo-slider").css("background-image", `url("img/${sliderList[i]}")`);
        $(".overlay-bk").animate({'opacity': 0}, faderDelay);
        setTimeout(slideOn, faderTime);  
    }


    // $(".overlay-bk").animate({'opacity': 0}, 1000);
    // $(".overlay-bk").animate({'opacity': 1}, 1000);
    

    //WEBSITE CONTENT
    //INDEX CONTENT
    const indexContent = "Od 5 lat zajmujemy się realizacją wszelkiego rodzaju wizualizacji trójwymiarowych, przede wszystkim architektury oraz wnętrz, a także wizualizacji produktu oraz animacji. Stale rozwijamy technologię naszej pracy, dzięki czemu stale możemy poprawiać jakość naszych realizacji, a także rozwijać naszą ofertę o kolejne możliwości. Zapraszamy do zapoznania się z portfolio naszych realizacji oraz z naszą bogatą ofertą.";
    $("#index-container").append("<p>"+indexContent+"</p>");

    //CONTACT CONTENT
    const contactContent = "<h4>Mgr inż. arch. Kamil Golec<br>tel: +48787787787<br>email: info@digitalarch.pl</h4><br><br>";
    $("#contact-container").append("<p>"+contactContent+"</p>");


    //ABOUT US CONTENT
    const aboutContent = "Jesteśmy nowoczesnym studiem graficznym z Wrocławia, zajmującym się wszelkiego rodzaju wizualizacjami 3d. Pod szyldem digital.ARCH działamy od 2018 roku, lecz nasze korzenie sięgają znacznie dalej. Staramy się stale rozwijać system naszej pracy o najnowsze technologie, abyśmy mogli dostarczyć Państwu wizualizacje w jeszcze lepszej jakości. W naszych grafikach staramy się dążyć do osiągnięcia fotorealizmu, jednak nie boimy się również bardziej wymagających odrobiny artyzmu. Zapraszamy do zapoznania się i skorzystania z naszej oferty, nie tylko skierowanej do architektów oraz deweloperów!";
    $("#contact-container").append("<p>"+aboutContent+"</p>");

    //OFFER CONTENT
    const offerContent = "<p>Oferujemy wykonanie wszelkiego rodzaju wizualizacji graficznych. Specjalizujemy się przede wszystkim w grafice przeznaczonej dla architektów oraz deweloperów, a także wykonujemy wizualizacje produktów oraz animacje<br><br>W naszej ofercie znajdują się m.in.:</p><ul><li>Wizualizacje deweloperskie</li><li>Wizualizacje konkursowe</li><li> Wizualizacje wnętrz</li><li>Wizualizacje VR 360</li><li> Wizualizacje interaktywne</li><li> Wizualizacje produktów</li><li>Projekty graficzne</li><li> Animacje 3d</li></ul><p>W celu uzyskania większej ilości informacji oraz pełnej oferty zapraszam do <a href=\"kontakt.html\">kontaktu</a></p>";
    $("#offer-container").append(offerContent);

    

});
