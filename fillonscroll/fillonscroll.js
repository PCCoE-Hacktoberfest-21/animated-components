
var liItems = $('.contain li');

var liItemsTop = [];
liItems.each(function(i){
   var offsetTop = $(this).offset().top;
   liItemsTop[i] = offsetTop;
});

$(liItems[0]).find('h2, p').addClass('in-view');

$(window).on('scroll', function(){
  itemInView(liItems.slice(1));
  bgColour(liItemsTop);
});

function itemInView(items) {
  items.each(function(){
    if (($(this).offset().top - $(window).scrollTop()) <= $(window).height()/2) {
      $('h2, p', this).addClass('in-view');
    } else {
      $('h2, p', this).removeClass('in-view');
    }
  });
}

function bgColour(){
  var curPos = $(window).scrollTop() + $(window).height() /2;
  var _leng = $(liItems).length;
  liItems.each(function(i){
    if (curPos > $(liItems[i]).offset().top && i+1 == _leng || curPos > $(liItems[i]).offset().top && curPos < $(liItems[i+1]).offset().top) {
      var itemClass = ($(this).attr('class'));
      $('body').addClass(itemClass + '-bg');
    } else {
      var itemClass = ($(this).attr('class'));
      $('body').removeClass(itemClass + '-bg');
    }
  });
}