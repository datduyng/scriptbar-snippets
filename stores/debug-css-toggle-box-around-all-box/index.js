(() => {
  function toggleCssBoundingBox(id) {
    if (!id) {
      id = "scriptbar-debug-css-draw-box-around-all-box";
    }
    const el = document.getElementById(id);
    if (el) {
      el.remove();
      return console.info("Scriptbar: Successfully remove all bounding box")
    }

    var style = document.createElement('style');
    style.id = id;

    style.innerHTML = `* { outline: 1px solid red; }`;
    document.getElementsByTagName("head")[0].appendChild(style);
  }
})()