/*
 * Decode jwt token
 * See https://jwt.io/
 */

(function (root) {
  root.decodeJwt = (token) =>
    decodeURIComponent(
      atob(token.split(".")[1].replace("-", "+").replace("_", "/"))
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );
})(this);


console.log("%c Init method to decode jwt token. Below is example", 'background: #222; color: #bada55');
decodeJwt(`
    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0I
    joxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
`);