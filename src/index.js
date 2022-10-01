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
  
Boolean.parse = function (str) {
  switch (str.toLowerCase ()) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return false;
      //throw new Error ("Boolean.parse: Cannot convert string to boolean.");
  }
};
  
let list_fs_target_button = document.querySelectorAll('[fullscreen]');
  
document.addEventListener('fullscreenchange', (event) => {
  //list_fs_target_button_true = document.querySelectorAll('[fullscreen="true"]');
  let list_fs_target_button_true = document.querySelectorAll('[fullscreen="true"]');
  list_fs_target_button_true.forEach(elem =>{
        //elem.dataset['fullscreen'] = document.fullscreenElement!=null
        console.log("evetn ",document.fullscreenElement)
        if(document.fullscreenElement==null){
        console.log("LOG fullscreen")
          elem.setAttribute('fullscreen', false)
        }
  });
});
  
for (let item of list_fs_target_button) {
    item.addEventListener("click", function(event) {
      console.log("primero ",item.dataset['fullscreen'])
      if(document.fullscreenElement==null)
        item.setAttribute('fullscreen', false)
      var action = typeof item.dataset['fullscreen'] != 'undefined' ? Boolean.parse(item.dataset['fullscreen']) : false
      console.log("action ",action)
      /*list_fs_target_button.forEach(elem =>{
        elem.dataset['fullscreen'] = !action
      })*/
      item.dataset['fullscreen'] = !action
      console.log("primero ",item.dataset['fullscreen'])
      if(!action){
        FullscreenItem(item)
      }
      else{
        exitFullscreen(item);
      }
    });
}

export default {requestFullscreen, exitFullscreen}