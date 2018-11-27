$(function() {

    //Slider image list
    let sliderList = [
    "slider_01", 
    "slider_02", 
    "slider_03",
    "slider_04",
    "slider_05"
    ]

    let i = 0

    let faderDelay = 600; //fading effect duration
    let faderTime = 10000; //fading time interval

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
        
        $(".photo-slider").css("background-image", "url(\"img/"+ sliderList[i] + ".png\")");
        $(".overlay-bk").animate({'opacity': 0}, faderDelay);
        setTimeout(slideOn, faderTime);  
    }


    // $(".overlay-bk").animate({'opacity': 0}, 1000);
    // $(".overlay-bk").animate({'opacity': 1}, 1000);
    

    //WEBSITE CONTENT
    //INDEX CONTENT
    const indexContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lacus eu leo consequat lacinia eu eget tellus. Curabitur eget lacus felis. Nullam bibendum, justo sed venenatis varius, orci lacus interdum dui, ut aliquam felis risus gravida odio. In aliquam vestibulum massa, in pulvinar metus blandit sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed molestie quam vitae condimentum rhoncus. Mauris odio enim, interdum non quam a, porttitor porttitor magna. Nullam maximus, quam at imperdiet ullamcorper, metus nisl elementum turpis, eu pulvinar nulla nisi eget elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisis enim dui, sit amet malesuada nunc tempor eu. Pellentesque volutpat luctus metus id egestas. Nullam lobortis, arcu quis eleifend pulvinar, dolor justo convallis arcu, condimentum tempus arcu eros vitae augue. Phasellus id suscipit mauris. Mauris cursus ipsum vel lorem rhoncus eleifend. ";
    $("#text-container").append("<p>"+indexContent+"</p>");


});
