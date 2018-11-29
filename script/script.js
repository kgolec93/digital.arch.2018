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
                $("#main-menu").append("<li class=\"nav-item\"><a class=\"nav-link active\" href=\" "+ menuList[j].link + "\">" + menuList[j].name + "</a></li>");
            }
            else {
                $("#main-menu").append("<li class=\"nav-item\"><a class=\"nav-link\" href=\" "+ menuList[j].link + "\">" + menuList[j].name + "</a></li>");
            }            
        }
    };

    menuAppend();
    
    
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
    $(".photo-slider").css("background-image", "url(\"img/"+ sliderList[i] + "\")");
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
        
        $(".photo-slider").css("background-image", "url(\"img/"+ sliderList[i] + "\")");
        $(".overlay-bk").animate({'opacity': 0}, faderDelay);
        setTimeout(slideOn, faderTime);  
    }


    // $(".overlay-bk").animate({'opacity': 0}, 1000);
    // $(".overlay-bk").animate({'opacity': 1}, 1000);
    

    //WEBSITE CONTENT
    //INDEX CONTENT
    const indexContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lacus eu leo consequat lacinia eu eget tellus. Curabitur eget lacus felis. Nullam bibendum, justo sed venenatis varius, orci lacus interdum dui, ut aliquam felis risus gravida odio. In aliquam vestibulum massa, in pulvinar metus blandit sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed molestie quam vitae condimentum rhoncus. Mauris odio enim, interdum non quam a, porttitor porttitor magna. Nullam maximus, quam at imperdiet ullamcorper, metus nisl elementum turpis, eu pulvinar nulla nisi eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisis enim dui, sit amet malesuada nunc tempor eu. Pellentesque volutpat luctus metus id egestas. Nullam lobortis, arcu quis eleifend pulvinar, dolor justo convallis arcu, condimentum tempus arcu eros vitae augue. Phasellus id suscipit mauris. Mauris cursus ipsum vel lorem rhoncus eleifend. ";
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
