jQuery(document).ready(function(){
    $(".icon").on("click", function(){
$("nav ul").toggleClass("showing");
    });
});
jQuery(document).ready(function () {
    $('#home-slider').owlCarousel({
        
        loop: true,
        margin: 20,
        dots:false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });  
    $('#down-slider').owlCarousel({
      
        loop: true,
        margin: 20,
        dots:false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});
var img = document.getElementById('myImg');

img.onmouseout = function () {
   this.src = './image/blue-gd.png';
};

img.onmouseover = function () {
   this.src = './image/blue-konsa.png';
};
img.onmouseover = function () {
    this.src = './image/blue-card.png';
 };
 img.onmouseover = function () {
    
    this.src = './image/blue-barber.png';
 };
 img.onmouseover = function () {
    this.src = './image/beer.png';
 };
 img.onmouseover = function () {
    this.src = './image/beauty.png';
 };
 img.onmouseover = function () {
    this.src = './image/beach.png';
 };
 img.onmouseover = function () {
    this.src = './image/blue-optic.png';
 };
 img.onmouseover = function () {
    this.src = './image/circus.png';
 };
 img.onmouseover = function () {
    this.src = './image/electro.png';
 };
 img.onmouseover = function () {
    this.src = './image/fkcz.png';
 };
 img.onmouseover = function () {
    this.src = './image/fss.png';
 };
 $(document).ready(function(){
     var offset = 250;
     var duration = 500;

     $(window).scroll(function(){
         if($(this).scrollTop() > offset){
             $('.to-top')  .fadeIn(duration);
         }else{
             $('.to-top').fadeIn(duration);
         }
     })
 });