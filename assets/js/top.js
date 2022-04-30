
function gobacktop() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    scrolldelay = setTimeout('pageScroll()',10);
}

window.onscroll = function () { 
    var backtop = document.getElementsByClassName("top")[0];
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    if(top < 400)
        backtop.style.opacity = '0%' ;
    else
        backtop.style.opacity='100%';

 }

 
 var slideIndex = [1,1];
 var slideId = ["mySlides1", "mySlides2"]
 showSlides(1, 0);
 showSlides(1, 1);

 function plusSlides(c, no) {
    showSlides(slideIndex[no] += c, no);
 }

 function showSlides(c, no) {
    var b;
    var x = document.getElementsByClassName(slideId[no]);
    if (c > x.length) {slideIndex[no] = 1}    
    if (c < 1) {slideIndex[no] = x.length}
    for (b = 0; b < x.length; b++) {
        x[b].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
 }

 