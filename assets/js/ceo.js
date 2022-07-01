
 $(window).on('load',function(){
  setTimeout(function(){ // allowing 3 secs to fade out loader
  $('.page-loader').fadeOut('fast');
  $('.body-wrap').addClass("open");
  },1800);
  

});

  