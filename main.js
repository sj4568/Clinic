var nav = document.querySelector(".nav");
var btn = document.querySelector(".btn");
var ul = document.querySelector(".ul");
window.onscroll=function(){
nav.classList.toggle("sticky", window.scrollY>0);



}
btn.onclick=function(){

nav.classList.toggle("active");
ul.classList.toggle("show");

}