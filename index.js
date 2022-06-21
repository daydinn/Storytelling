

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});





/*
function isElementInViewport(el){
if(typeof jQuery=== "function" && el instanceof jQuery){
el = el[0];

}
var rect = el.getBoundingClientRect();
return(
(rect.top <= 0
&& rect.bottom >= 0)
||
(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)&&
rect.top <= (window.innerHeight || document.documentElement.clientHeight))
||
(rect.top >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
*/












/*

  var scroll = window.requestAnimationFrame ||
function(callback) {window.setTimeout(callback,1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll'
); //look for all elements with class show-on-scroll and return them as a array


function loop(){ //look throught all elements and check if they are visiable
elementsToShow.forEach(function (element){
if (isElementInViewport(element)){
element.classList.add('is-visible');
}else{  //otherwise remove the class
element.classList.remove('is-visible');
}
});
scroll(loop); //pass this function as callback(it will repeat)
}

loop();

/*
window.addEventListener('scroll', function(){
  console.log("Scrollin'");

  })
  */


  
  
  
  
  
  
  
  
  
  
  window.addEventListener('click', () => {
 document.getElementById("song").play();

  });
