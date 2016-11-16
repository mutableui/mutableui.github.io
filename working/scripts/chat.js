

//var json = JSON.parse(data);

var counter = 0;

var buttonHeight, bigHeadHeight, windowWidth, chatWidth, bigOffset;

var f = (function () {
   buttonHeight = $('#button').outerHeight(true);
      $('#chatpadder').css('height', buttonHeight);

   bigHeadHeight = $(window).height()-buttonHeight;
      $('.big-item').css('height', bigHeadHeight);

   windowWidth = $(window).width();
   windowHeight = $(window).height();

   chatWidth = $('#chatList').width();

   bigOffset = (windowWidth-chatWidth)/-2;
   $('.big-item').css('margin-left', bigOffset);
   });

$(document).ready(f);
$(window).on('resize', f);

function openAbout() {
  $('#about-overlay').fadeIn(300);
};
function openLinks() {
  $('#links-overlay').fadeIn(300);
};
function closeAbout() {
  $('#about-overlay').fadeOut(300);
};
function closeLinks() {
  $('#links-overlay').fadeOut(300);
};

$('body').on("click", ".firstButton", (function(){
$('#splashPadder').show();
$('#bgvid').fadeIn(300);
$('#gradientBG').fadeIn(350);
}));

$('body').on("click", "#button", (function(e){
e.preventDefault;
$('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function(e){
            if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel" || e.type == "touchmove"){
                $("html,body").stop();
            }
        })
$('#progress-marker').css('width', windowWidth*counter/data.length);
$('#button').fadeOut(100);
/*VISIBLE FUNCTIONS GO HERE*/
if (data[counter].bigHead == 1) {
  var vidDisplay = ""

  $('#chatList').find(' > li:nth-last-child(1)').before("<li id=\""+data[counter].vidContent+"\" class=\"big-item\" style = \"height:"+bigHeadHeight+"\"; ><div class=\"big-cont\"><h1>"+data[counter].textContent+"</h1></div></li><div style=\"clear:both\"></div>");
  $('.big-item').css('height', bigHeadHeight);
  $('.big-item').css('margin-left', bigOffset);

$("#bgvid").find('source').attr("src", "vid/"+data[counter].vidContent+".mp4");
  $('#bgvid').load();

  var section = $('#chatList li').last();
      $("html, body").animate({
          scrollTop: $(section).offset().top
      }, 1000);

    setTimeout(function(){
      afterPost();
    }, 500);
}


else {

postString(function() {afterPost()});

} //end else

function postString(callback) {
  var dataIndex = counter;
  var paraType = [];

  for(i = 0; i < data[dataIndex].textContent.length; i++){
    if (data[dataIndex].textContent[i].length < 20) {
      paraType.push("h2");
    }
    else {
      paraType.push("p");
    }
      (function(i){
          setTimeout(function(){
            if (i==0) {
                $('#chatList').find(' > li:nth-last-child(1)').before("<li class=\"\"><div class=\"speech popout popoutR\"><"+ paraType[i] +">"+data[dataIndex].textContent[i]+"</"+ paraType[i] +"></div></li><div style=\"clear:both\"></div>");
            }
            else {
                $('#chatList').find(' > li:nth-last-child(1)').before("<li class=\"\"><div class=\"response popout popoutL\"><"+ paraType[i] +">"+data[dataIndex].textContent[i]+"</"+ paraType[i] +"></div></li><div style=\"clear:both\"></div>");
              }
          var section = $('#chatList li').last();
              $("html, body").animate({
                  scrollTop: $(section).offset().top
              }, 700);
          }, 1300 * i);
      }(i));

  };
  setTimeout(function(){
    callback();
  }, 1300*data[dataIndex].textContent.length);

}

function afterPost() {
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
  $('#button').removeClass().addClass(buttonClass).html(buttonDisplay).fadeIn(500);
  counter++;
}

       return false;
}));
