const { plus100, getTz } = require("./index");

// console.assert(plus100(0) === 100, 'Simple test failed')

console.assert(
  getTz(116.3883, 39.9289) === "Asia/Shanghai",
  "Simple test failed",
);

console.info("Simple test passed");
