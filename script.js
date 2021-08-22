$(function(){

    $(function(){
        $('.news_item').click(function(){
            var news = $(this).find('.news');
            if(news.hasClass('open')){
                news.removeClass('open');
                news.slideUp();
                $(this).find('span').text('+');
            } else {
                news.addClass('open');
                news.slideDown();
                $(this).find('span').text('-');
            }
        });
    });

    






});
