/*
 * Expose method insertCss allow to insert css code into the DOM
 * Example: insertCss(`html{filter: invert(1)}`)
 */
((root, document) => {
  function insertCss(code) {
    if (!code) {
      return console.error('insertCss: No code');
    }
    var style = document.createElement('style');
  
    if (style.styleSheet) {  // IE
      style.styleSheet.cssText = code;
    } else { // Other browsers
      style.innerHTML = code;
    }
    document.getElementsByTagName("head")[0].appendChild( style );
  }
  root.insertCss = insertCss;
})(this, document)