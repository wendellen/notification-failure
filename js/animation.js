

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

var assetIndex = 0
var assets = ['0.png', '1.png', '2.png', '3.png', '5.png', '6.png']

function makeNotification(){


  $("<div class='notification'>")
    .css({
      left: window.innerWidth*Math.random()-200,
      top: window.innerHeight*Math.random()-200,
      'background-image': "url(assets/" + assets[assetIndex % assets.length] + ")",
      'background-repeat': 'no-repeat'
    })
    .appendTo("body")
    .animateCss('zoomIn')

    assetIndex += 1

}

function popUp(){
  var makeTimer = setInterval(makeNotification, 117.646875)
  setTimeout( function(){
    clearInterval( makeTimer )

    setTimeout(changeColor, 5)

  }, 50000)
}

function changeColor(){
  // $('.notification').css('filter', 'hue-rotate(90deg)')
  var colorTimer = setInterval(function(){
    var notifications = $('.notification')
    var notification = notifications.eq( Math.round(Math.random()* (notifications.length-1)) )
    notification.css('filter', 'invert(100%)')
    notification.css('transform', 'rotate(180deg)')
  }, 88.23515625)

  setTimeout( function(){
    clearInterval( colorTimer )
    goBlack()
  }, 85000)

  // $('.notification').css('filter', 'brightness(0)')
}

function goBlack(){
  // $('.notification').css('filter', 'hue-rotate(90deg)')
  var blackTimer = setInterval(function(){
    var notifications = $('.notification')
    var notification = notifications.eq( Math.round(Math.random()* (notifications.length-1)) )
    notification.css('filter', 'brightness(0)')
  }, 4)

  setTimeout( function(){
    clearInterval( blackTimer )
  }, 30000)

  // $('.notification').css('filter', 'brightness(0)')
}

popUp()
