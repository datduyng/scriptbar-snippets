---
summary: Log object value sizes
tags: [Basic]
---

Script will create a global method `expensiveKeys(obj)` that will pretty-print object size. Where `obj` is a non-array javascript object

Example:
- `expensiveKeys({'testNum': 10, 'testStr': 'longtext'}).mb()`
- `expensiveKeys({'testValue': 'long string'})`
