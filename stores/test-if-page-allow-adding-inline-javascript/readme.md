---
summary: Run script to test if page allow injecting js or running remote script
tags: [Basic]
---

This code snippet checks if the page allows creating and executing new inline scripts (script-injection attacks) See https://github.com/bahmutov/disable-inline-javascript-tutorial

For example, Github doesn't allow running remote script. When running this script on github.com, you will see error below



Credit: https://github.com/bahmutov/code-snippets/blob/master/test-script-injection.js



![Test to see if page allow running script](/stores-assets/test-if-page-allow-adding-inline-javascript/block01.png)