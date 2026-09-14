(function(){
  var src = "data:image/jpeg;base64," + (window.__LOGO1||"") + (window.__LOGO2||"");
  document.querySelectorAll("img[data-logo]").forEach(function(img){ img.src = src; });
})();
