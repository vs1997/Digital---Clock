function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  document.getElementById('Clock').innerHTML = hour + ' : ' + min + ' : ' + sec;

  var t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
