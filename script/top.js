$(function() {
  if ("$!share" == 1) {
    var tophtml = $("<div class='top clearfix'><div class='f28'><div class='closebanner'></div><div class='text'><p class='f28'>新通移民</p><p class='f24'>上新通移民体验更多精彩内容</p></div></div><div><button class='f28' id='applink'>打开APP</button></div></div>")
    $("body").prepend(tophtml);
    // $(".top").show();
    $(".banner").css({
      marginTop: 1.2 + "rem",
    });
  } else {
    // $(".top").hide();
    $(".banner").css({
      marginTop: '0',
    });
  }
  $("#applink").on('click', function(event) {
    event.preventDefault();
    applink();
  });
  $(".closebanner").on('click', function(event) {
    event.preventDefault();
    $(".top").hide();
    $(".banner").css({
      marginTop: '0',
    });
  });
  $("img").on('click', function(event) {
    event.preventDefault();
    var src = $(this).attr("src");
    $(".bgClass").show("400");
    $(".maximg").attr({
      src: src
    }).show()
    var imgH = $(".maximg").height();
    $(".maximg").css({
      marginTop: -imgH / 2,

    });
    $("meta[name='viewport']").attr({
      content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
    });

  });
  $(".maximg").on('click', function(event) {
    $(".maximg").hide("400");
    $(".bgClass").hide("400");
    $("meta[name='viewport']").attr({
      content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
    });
  });

})

function applink() {
  window.location.href = 'xtym://';
  var clickedAt = +new Date;
  setTimeout(function() {
    !window.document.webkitHidden && setTimeout(function() {
      if (+new Date - clickedAt < 2000) {
        window.location.href = '$!appDownload';
      }
    }, 500);
  }, 500)

}