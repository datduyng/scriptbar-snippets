/*
 * Warning this is dangerous in general if you don't understand 
 * the remote code that you will be executing
 * example: console.runRemoteCode("https://rawgit.com/bahmutov/code-snippets/master/first-paint.js")
 */

(function (console) {
  console.runRemoteCode = function (url) {  
    if (!url) {
      return console.error('console.runRemoteCode: No url');
    }
  
    // download and run the script
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
  }
})(console)