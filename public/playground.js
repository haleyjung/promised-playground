// 🐙 Two libraries for making AJAX requests are brought into this client so that you can practice a callback based AJAX request OR a Promise based pattern
// Callback: jQuery, using $.ajax
// Promise: axios (though you could also use the native fetch()... 😉)

// HINT: You'll want to take a look at the implementation of the server's endpoints to understand what parameters each endpoint accepts (if any)

const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');

// TODO: Make a network request inside this handler to endpoint one.
// Be sure to send any information the server needs to process the request!
btnOne.onclick = function handleOneClick (e) {
  axios.get('/one')
    .then(res => {
      console.log('btnOne fetches data:', res.data);
    })
    .catch(err => {
      console.log('btnOne:', err);
    })
};

// TODO: Make a network request inside this handler to endpoint two.
// Be sure to send any information the server needs to process the request!
btnTwo.onclick = function handleTwoClick (e) {
  let newMsg = {
    key: 'message',
    value: 'New message'
  };

  axios.post('/two', newMsg)
    .then(res => {
      console.log('btn2 success:', res);
    })
    .catch(err => {
      console.log('btn2 failed:', err);
    })

  axios.get('/two')
    .then(res => {
      console.log('btnTwo fetches data:', res.data);
    })
    .catch(err => {
      console.log('btnTwo:', err);
    })
};

// TODO: Make a network request inside this handler to endpoint three.
// Be sure to send any information the server needs to process the request!
btnThree.onclick = function handleThreeClick (e) {
  let editMsg = {
    message: '<No More Hello World>'
  };

  axios.put('/three', editMsg)
    .then(res => {
      console.log('btnThree success!', res.data)
    })
    .catch(err => {
      console.log('btnThree failed')
    })

    axios.get('/three')
      .then(res => {
        console.log('btnThree fetches data:', res.data)
      })
      .catch(err => {
        console.log('btnThree failed to fetch data:', err)
      })
};
