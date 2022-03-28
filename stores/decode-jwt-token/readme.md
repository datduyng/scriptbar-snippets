---
summary: Decode JWT token
tags: [Basic]
---

Expose a global method `decodeJwt(token)` to decode a JWT token.

See [https://jwt.io/](https://jwt.io/) for more detail

#### Example
> `decodeJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')`

> Output: `'{"sub":"1234567890","name":"John Doe","iat":1516239022}'`
