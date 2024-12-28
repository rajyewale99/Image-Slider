let currentslide=0;
let slides = document.querySelectorAll(".slide");
let prevbtn = document.querySelector(".prev");
let nextbtn = document.querySelector(".next");
function next(){
    let nextslide= (currentslide+1)%slides.length;
    slides[currentslide].style.display="none";
    slides[nextslide].style.display="block";
    currentslide= nextslide;
}
nextbtn.addEventListener("click",next)
prevbtn.addEventListener("click",function(){
    let prevslide=currentslide==0?slides.length-1:currentslide-1;
    slides[currentslide].style.display="none";
    slides[prevslide].style.display="block";
    currentslide= prevslide;
})
setInterval(next, 1000);