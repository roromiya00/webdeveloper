$(function(){

    $(".itemList").click(function(){
       //$(this).find('.portfolioPage').addClass("disB");
       $('.portfolioPage', this).addClass("disB");
    });

    $(".itemList a").click(function(event){
      event.stopImmediatePropagation();
    });


   $("#portfolio  .closeBtn").click(function(event){
      event.stopImmediatePropagation();
      $(this).parent().removeClass("disB");
   });



	$('#hamburger').click(function(){

		$(this).toggleClass('open');
    $('.nav-items').slideToggle("slow");

  })



   $(window).scroll(function(){
   var navbar = $(this).scrollTop();
   console.log(navbar);
   var $header = $('#hd');
   if(navbar > 860){
       $header.addClass('activated');
   }else{
       $header.removeClass('activated');
   }
 })
})
