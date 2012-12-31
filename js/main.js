$(function(){
  $('.door-controller').click(function(){
    $('.car-door').toggleClass('doors-open');
    if (!$.find('.doors-open').length > 0)
     $('.door-closure-lamp').toggleClass('door-closure-lamp-on');
  });
});
