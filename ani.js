var index = 1
var i = 0
slideshow (index) 

function slide(n) {
    slideshow(index += n)

}

function plusslide (n) {
slideshow (index=n)



}

function slideshow( n ){

    var i;
    var slides = document.getElementsByClassName("ok");
    if (n > slides.length) {index = 1}    
    if (n < 1) {index = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[index-1].style.display = "block";  
}