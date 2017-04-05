function equalHeight(group) {
    var tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}

$(document).ready(function () {
    if ($('.mainslider').length > 0) {
        $('.mainslider').slick({
            arrows: false,
            autoplay: true,
            fade: true,
            dots: true
        });
    }

    $('input[type=checkbox]').addClass('checkbox');
    $('input[type=radio]').addClass('radio');
    $('input[type=file]').addClass('file');
    $('input[type=submit]').addClass('submit');
    $('[disabled=disabled]').addClass('disabled');
    $('[selected=selected]').addClass('selected');
    $('table').find('tr:odd').addClass('odd');
    $('table').find('tr:even').addClass('even');
    $('table').find('tr:first-child').addClass('first');
    $('table').find('tr:last-child').addClass('last');
    $('table tr').find('td:first-child').addClass('first');
    $('table tr').find('td:last-child').addClass('last');
    $('ul').find('li:first-child').addClass('first');
    $('ul').find('li:last-child').addClass('last');
    $('ul').find('li:odd').addClass('odd');
    $('ul').find('li:even').addClass('even');

    equalHeight($(".eq"));

});
$(window).on('load', function(){

});
$(window).on('resize', function(){

});