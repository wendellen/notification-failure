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


function makeInverted(){

  $("<div class='notificationInverted'>")
    .css({
      left: window.innerWidth*Math.random()-200,
      top: window.innerHeight*Math.random()-200,
      'background-image': "url(assets/" + assets[assetIndex % assets.length] + ")",
      'background-repeat': 'no-repeat',
      'filter': 'invert(100%)',
      'cursor': 'none'

    })
    .appendTo("body")
    .animateCss('zoomIn')

    assetIndex += 1

}

function changeColor(){

  var colorTimer = setInterval(makeInverted, 472)

  setTimeout( function(){
    clearInterval( colorTimer )

    setTimeout(rotate, 1)

  }, 53000)
}

function rotate(){
  var rotateTimer = setInterval(function(){
    var notifications = $('.notificationInverted')
    var notification = notifications.eq( Math.round(Math.random()* (notifications.length-1)) )
    notification.css('transform', 'rotate(180deg)')
  }, 472)

  setTimeout( function(){
    clearInterval( rotateTimer )
    setTimeout( goBlack, 60)
  }, 30000)
}

function goBlack(){
  // $('.notification').css('filter', 'hue-rotate(90deg)')
  var blackTimer = setInterval(function(){
    var notifications = $('.notificationInverted')
    var notification = notifications.eq( Math.round(Math.random()* (notifications.length-1)) )
    notification.css('filter', 'brightness(0)')
  }, 59)

  setTimeout( function(){
    clearInterval( blackTimer )
  }, 31000)

  // $('.notification').css('filter', 'brightness(0)')
}

changeColor()
