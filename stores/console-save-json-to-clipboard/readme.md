---
summary: Save object as .json file from Chrome Devtool
tags: ["intermediate"]
---

A simple way to save objects as .json files from the console, includes a chrome extension along with a plain script.

### Usage
`console.save(data, [fileName])`

Data can be a string or just an object, objects are passed through json.stringify() before writing to file. Filename is optional, defaults to 'console.json'.

