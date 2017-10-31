$(function() {
  if ("$!share" == 1) {
    // if (true) {
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
    $(".maximg").show().find("img").attr({
      src: src
    });
  });
  $(".bgClass").on('click', function(event) {
    $(".maximg").hide("400");
    $(this).hide("400");
  });
  var $targetObj = $('#maximg');
  //初始化设置
  cat.touchjs.init($targetObj, function(left, top, scale, rotate) {
    $targetObj.css({
      left: left,
      top: top,
      'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)',
      '-webkit-transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)'
    });
  });
  //初始化拖动手势（不需要就注释掉）
  cat.touchjs.drag($targetObj, function(left, top) {
    $('#left').text(left);
    $('#top').text(top);
  });
  //初始化缩放手势（不需要就注释掉）
  cat.touchjs.scale($targetObj, function(scale) {
    $('#scale').text(scale);
  });
  //初始化旋转手势（不需要就注释掉）
  cat.touchjs.rotate($targetObj, function(rotate) {
    $('#rotate').text(rotate);
  });
})

// function applink() {
//   window.location.href = 'xtym://';
//   var clickedAt = +new Date;
//   setTimeout(function() {
//     !window.document.webkitHidden && setTimeout(function() {
//       if (+new Date - clickedAt < 2000) {
//         window.location.href = '$!appDownload';
//       }
//     }, 500);
//   }, 500)

// }
function applink() {
  if (browser.versions.ios) {
    window.location.href = "xtym://";
    // window.location.href = 'xtym://';
    // window.location = 'zjmobile://platformapi/startapp';
    var clickedAt = +new Date;
    setTimeout(function() {
      !window.document.webkitHidden && setTimeout(function() {
        if (+new Date - clickedAt < 2000) {
          window.location.href = '$!appDownload';
        }
      }, 500);
    }, 500)
  } else if (browser.versions.android) {
    window.location.href = "xtym://**";
    var clickedAt = +new Date;
    setTimeout(function() {
      !window.document.webkitHidden && setTimeout(function() {
        if (+new Date - clickedAt < 2000) {
          window.location.href = '$!appDownload';
        }
      }, 500);
    }, 500)
  }


}
var browser = {
  versions: function() {
    var u = navigator.userAgent,
                  app = navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1,
                   /*IE内核*/               presto: u.indexOf('Presto') > -1,
            /*opera内核*/               webKit: u.indexOf('AppleWebKit') > -1,
      /*苹果、谷歌内核*/
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
           /*火狐内核*/                mobile: !!u.match(/AppleWebKit.*Mobile.*/),
           /*是否为移动终端*/                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      /*ios终端*/
                     android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      /*android终端或者uc浏览器*/
                     iPhone: u.indexOf('iPhone') > -1,
            /*是否为iPhone或者QQHD浏览器*/                iPad: u.indexOf('iPad') > -1,
          /*是否iPad*/                webApp: u.indexOf('Safari') == -1,
            /*是否web应该程序，没有头部与底部*/                souyue: u.indexOf('souyue') > -1,
                     superapp: u.indexOf('superapp') > -1,
                     weixin: u.toLowerCase().indexOf('micromessenger') > -1,
                     Safari: u.indexOf('Safari') > -1
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()

};