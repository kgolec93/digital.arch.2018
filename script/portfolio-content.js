$(function() {

let j = 0;

let galImg = [
    {filename:"img_01", title: "tytuł01", author: "author01"},
    {filename:"img_02", title: "tytuł02", author: "author02"},
    {filename:"img_03", title: "tytuł03", author: "author03"},
    {filename:"img_04", title: "tytuł04", author: "author04"},
    {filename:"img_05", title: "tytuł05", author: "author05"},
    {filename:"img_06", title: "tytuł06", author: "author06"},
    {filename:"img_07", title: "tytuł07", author: "author07"},
    {filename:"img_08", title: "tytuł08", author: "author08"},
    {filename:"img_09", title: "tytuł09", author: "author09"},
    {filename:"img_10", title: "tytuł10", author: "author10"},
    {filename:"img_11", title: "tytuł11", author: "author11"},
    {filename:"img_12", title: "tytuł12", author: "author12"},
    {filename:"img_13", title: "tytuł13", author: "author13"},
    //{filename:"img_14", title: "tytuł14", author: "author14"},
    {filename:"img_15", title: "tytuł15", author: "author15"},
    //{filename:"img_16", title: "tytuł16", author: "author16"},
    {filename:"img_17", title: "tytuł17", author: "author17"},
    {filename:"img_18", title: "tytuł18", author: "author18"},
    //{filename:"img_19", title: "tytuł19", author: "author19"},
    {filename:"img_20", title: "tytuł20", author: "author20"},
    {filename:"img_21", title: "tytuł21", author: "author21"},
    //{filename:"img_22", title: "tytuł22", author: "author22"},
    //{filename:"img_23", title: "tytuł23", author: "author23"},
    //{filename:"img_24", title: "tytuł24", author: "author24"},
    {filename:"img_25", title: "tytuł25", author: "author25"},
    {filename:"img_26", title: "tytuł26", author: "author26"},
    //{filename:"img_27", title: "tytuł27", author: "author27"},
    {filename:"img_28", title: "tytuł28", author: "author28"},
    {filename:"img_29", title: "tytuł29", author: "author29"},
    {filename:"img_30", title: "tytuł30", author: "author30"},
    {filename:"img_31", title: "tytuł31", author: "author31"},
    {filename:"img_32", title: "tytuł32", author: "author32"},
    //{filename:"img_33", title: "tytuł33", author: "author33"},
    {filename:"img_34", title: "tytuł34", author: "author33"},
    {filename:"img_35", title: "tytuł35", author: "author33"},
    {filename:"img_36", title: "tytuł36", author: "author33"},
    //{filename:"img_37", title: "tytuł37", author: "author33"},
    {filename:"img_38", title: "tytuł38", author: "author33"},
    {filename:"img_39", title: "tytuł39", author: "author33"},
    {filename:"img_40", title: "tytuł40", author: "author33"},
    {filename:"img_41", title: "tytuł41", author: "author33"},
    {filename:"img_42", title: "tytuł42", author: "author33"},
    //{filename:"img_43", title: "tytuł43", author: "author33"},
    //{filename:"img_44", title: "tytuł44", author: "author33"},
    {filename:"img_45", title: "tytuł45", author: "author33"},
    {filename:"img_46", title: "tytuł46", author: "author33"},
    {filename:"img_47", title: "tytuł47", author: "author33"},
    {filename:"img_48", title: "tytuł48", author: "author33"}
];



let NR
let TITLE
let galCell

//gallery content generator
    while (j < galImg.length){
        NR = galImg[j].filename; 
        TITLE = galImg[j].title;
        galCell = `
        <div class="col-4 padding-1">
            <div id="${NR}" class="gal-img">
                <a data-lightbox="all" data-title="" href="gal/${NR}.jpg\">
                    <div class="cell thumbnail">
                        <p>${TITLE}</p>
                    </div>
                </a>
            </div>
        </div>`;
        $("#gal-container").append(galCell);
        $("body").append(`
            <style>#${NR} {
                    background-image: url("gal/${NR}.jpg");
                }
            </style>
        `); 
        j++;
    };


});
