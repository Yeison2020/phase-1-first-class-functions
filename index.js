function receivesAFunction(callback) {
  callback();
}
//------------------------------------
function returnsANamedFunction() {
  let fn = function () {};
  return fn;
}

//----------------------------------------
// const returnsAnAnonymousFunction = function () {
//   returnsAnAnonymousFunction();
// };

// function returnsAnAnonymousFunction() {
//   let returnsAnAnonymousFunction = () => {};
//   return returnsAnAnonymousFunction();
// }

function returnsAnAnonymousFunction() {
  return function () {};
}
