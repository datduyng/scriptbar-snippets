---
summary: Break point on property access
tags: [Intermediate,Debug]
---

This is a very handy debugging tool to stop page javascript execution upon a registered object properties getter or setter acccess



#### Usage
- Omg the cookie is being changed, but where? Give me a breakpoint when JS changes my cookies!
  - `debugAccess(document, 'cookie');`

- Some JS is getting the scrollTop value causing massive Recalculate Styles costs.. Who is the perpetrator?
  - `debugAccess(document.body,'scrollTop', true)`

#### Common error
- `TypeError: can't redefine non-configurable property "x"`. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_redefine_property


#### References
- [https://gist.github.com/dmethvin/1676346](https://gist.github.com/dmethvin/1676346)
- [https://stackoverflow.com/questions/11618278/breakpoint-on-property-change](https://stackoverflow.com/questions/11618278/breakpoint-on-property-change)
  