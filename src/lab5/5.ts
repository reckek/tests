import crypto from "node:crypto" 

let res = [];
let i = 0;

var startTime = Date.now();

console.log("__START__ ", 0);
while (i < 100000) {
  res.push(crypto.randomUUID() + i + " " + crypto.randomUUID() + i);
  i++;
  console.log("__PROGRESS__ ", i);
}
console.log("__END__ ", `${Date.now() - startTime}ms`);