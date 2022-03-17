// 🐙 Two libraries for making AJAX requests are brought into this client so that you can practice a callback based AJAX request OR a Promise based pattern
// Callback: jQuery, using $.ajax
// Promise: axios (though you could also use the native fetch()... 😉)

// HINT: You'll want to take a look at the implementation of the server's endpoints to understand what parameters each endpoint accepts (if any)

const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');

btnOne.onclick = function handleOneClick (e) {
  // TODO: Make a network request inside this handler to endpoint one.
  // Be sure to send any information the server needs to process the request!
};
btnTwo.onclick = function handleTwoClick (e) {
  // TODO: Make a network request inside this handler to endpoint two.
  // Be sure to send any information the server needs to process the request!
};
btnThree.onclick = function handleThreeClick (e) {
  // TODO: Make a network request inside this handler to endpoint three.
  // Be sure to send any information the server needs to process the request!
};
