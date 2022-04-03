/*
 * Inspired by https://gist.github.com/dmethvin/1676346
 */
(function AddBreakPointOnPropertyAccessFunction(window) {
  function debugAccess(obj, prop, debugGet) {
    const origValue = obj[prop];
    Object.defineProperty(obj, prop, {
      get: function () {
        if (debugGet)
          debugger;
        return origValue;
      },
      set: function (val) {
        debugger;
        return origValue = val;
      },
    });
  };
  window.debugAccess = debugAccess;
})(window);