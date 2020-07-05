	/*!
 * https://cocreate.app
 * https://github.com/CoCreate-app/Fullscreen_Toggle
 * Released under the MIT license
 * https://github.com/CoCreate-app/Fullscreen_Toggle/blob/master/LICENSE
 */	

var requestFullscreen = function (ele) {
    if(!document.fullscreenElement){
      if (ele.requestFullscreen) {
        ele.requestFullscreen();
      } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
      } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
      } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
      } else {
        console.log('Fullscreen API is not supported.');
      }
    }
};
  var exitFullscreen = function (item) {
    if(document.fullscreenElement){
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else {
        console.log('Fullscreen API is not supported.');
      }
      //FullscreenItem(item)
    }
  };
  var FullscreenItem = function (item) {
    //item = event.target;
    var target = item.getAttribute("target") == null ? document.documentElement : document.querySelector(item.getAttribute("target"))
    //console.log('target => ',target)
    requestFullscreen(target);
  }
  
  var list_fs_target_button = document.getElementsByClassName("fs-toggle")
  for (let item of list_fs_target_button) {
      item.addEventListener("click", function(event) {
        //console.log(item)
        FullscreenItem(item)
      });
      item.addEventListener("click", function(event) {
          exitFullscreen(item);
        });
  }
  //var list_fs_exit_button = document.getElementsByClassName("fs-exit-page-button")
  var list_fs_exit_button = document.querySelectorAll(".fs-exit-page-button")
  //console.log(list_fs_exit_button)
  list_fs_exit_button.forEach(item=>{
    item.addEventListener("click", function(event) {
      exitFullscreen(item);
    });
  })

/*
document.addEventListener("fullscreenchange", function () {
    console.log('-')
}, false);

document.addEventListener("mozfullscreenchange", function () {
    console.log('-')
}, false);

document.addEventListener("webkitfullscreenchange", function () {
    console.log('-')
}, false);

document.addEventListener("msfullscreenchange", function () {
    console.log('-')
}, false);
*/