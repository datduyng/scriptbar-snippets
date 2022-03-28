/*
 * Inspired by https://chrome.google.com/webstore/detail/console-injector/abdfbnapkafgcheofcijaieahcbjnpkd?hl=en
 * example: console.inject('jquery')
 */
(function injectAnyRemoteScript(window, console) {
  const PROMPT_LIMIT = 10;

  const runRemoteCode = function (url) {  
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

  console.inject = (library) => {
    if (!library) {
      return console.error("library name is required");
    }

    fetch("https://api.cdnjs.com/libraries?search=" + library)
      .then((response) => response.json())
      .then((json) => {
        const choiceNum = window.prompt(`Type a number to select a library:
${json.results.slice(0, PROMPT_LIMIT).map((item, index) => `${index}. ${item.name}`).join("\n")}`);
        let choice = 0;
        try {
          console.log("chose choice", choiceNum);
          choice = parseInt(choiceNum, 10);
          if (choice < 0 && choice >= PROMPT_LIMIT) {
            throw new Error();
          }
        } catch {
          alert("Invalid choice number. Enter a number from 0 to " + (PROMPT_LIMIT - 1));
          return;
        }
        console.info("Injecting " + json.results[choice].name, 'latest from', json.results[choice].latest);
        runRemoteCode(json.results[choice].latest);
      });
  };
})(window, console);