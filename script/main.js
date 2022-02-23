$('.img').click(function(){
     let imgSrc = $(this).attr('src');
     let mainSrc = $('.main').attr('src');
     $(this).attr('src',mainSrc);
     $('.main').attr('src',imgSrc);
})