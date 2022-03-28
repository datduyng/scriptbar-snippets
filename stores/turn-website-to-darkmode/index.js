(function turnWebSiteIntoDarkMode(document) {
  function insertCss(code) {
    var style = document.createElement("style");
    style.innerHTML = code;
    document.getElementsByTagName("head")[0].appendChild(style);
  }

  insertCss(`html {
    filter: invert(1);
  }`);
})(document);
