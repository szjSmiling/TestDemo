/* eslint-disable */
export const stopJsLoading = function () {
  var xmlhttp = null;
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (xmlhttp != null) {
    xmlhttp.abort();
    mystop();
  }
}

function mystop() {
  if (window.attachEvent && !window.opera) {
    document.execCommand("stop");
  } else {
    window.stop();
  }
}