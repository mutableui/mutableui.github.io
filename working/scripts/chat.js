

//var json = JSON.parse(data);

var counter = 0;

var buttonHeight, bigHeadHeight, windowWidth, chatWidth, bigOffset;

var f = (function () {
   buttonHeight = $('#button').outerHeight(true);
      $('#chatpadder').css('height', buttonHeight);

   bigHeadHeight = $(window).height()-buttonHeight;
      $('.big-item').css('height', bigHeadHeight);

   windowWidth = $(window).width();

   chatWidth = $('#chatList').width();

   bigOffset = (windowWidth-chatWidth)/-2;
   $('.big-item').css('margin-left', bigOffset);
   });

$(document).ready(f);
$(window).on('resize', f);



$('body').on("click", "#button", (function(e){
e.preventDefault;
$('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(e){
            if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel" || e.type == "touchmove"){
                $("html,body").stop();
            }
        })

/*VISIBLE FUNCTIONS GO HERE*/
if (data[counter].bigHead == 1) {
  $('#chatList').find(' > li:nth-last-child(1)').before("<li class=\"big-item\" style = \"height:"+bigHeadHeight+"\"; ><div class=\"big-cont\"><h1>"+data[counter].textContent+"</h1></div></li><div style=\"clear:both\"></div>");
  $('.big-item').css('height', bigHeadHeight);
  $('.big-item').css('margin-left', bigOffset);
}
else {
  var popType;
  if (data[counter].bubbleType == "speech") {
    popType = "popoutR";
  }
  else {
    popType = "popoutL";
  }

$('#chatList').find(' > li:nth-last-child(1)').before("<li class=\"\"><div class=\""+data[counter].bubbleType+" popout "+popType+"\"><"+ data[counter].textSize +">"+data[counter].textContent+"</"+ data[counter].textSize +"></div></li><div style=\"clear:both\"></div>");
}

var buttonClass;
var buttonDisplay;

if (data[counter].buttonContent.isRoundButton == 1) {
  buttonClass = "rdButton";
  buttonDisplay = "<img src=\"images/"+data[counter].buttonContent.bImg+".png\"/>"
}
else {
  buttonClass = "sqButton";
  buttonDisplay = data[counter].buttonContent.bText;
}

$('#button').fadeOut(500, function() {
    $(this).replaceWith("<a id=\"button\" class=\""+buttonClass+"\">"+buttonDisplay+"</a>").fadeIn(500);
});

counter++;

/*SCROLLING FUNCTION*/
   var section = $('#chatList li').last();
       $("html, body").animate({
           scrollTop: $(section).offset().top
       }, 700);

       return false;
}));
