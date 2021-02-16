$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                margin: 20,

            },
            480:{
                items:2,
                margin: 20,
                nav:false,
            },
            767:{
                items:2,
                margin: 20,
                nav:false,
            }
        }
    });
    
  });