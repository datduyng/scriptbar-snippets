/*
 * Pause javascript execution on keydown. This is handy when your page
 * have a dynamic element that you want to pause the execution of javascript.
 */
((document) => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") debugger;
  });
})(document);
