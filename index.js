const express = require('express');

const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.json());

const storage = {
  message: 'Hello World'
};

app.get('/one', (req, res) => {
  console.log('/one req data is:', req)
  res.status(200).send(req.query.upper === true ? storage.message.toUpperCase() : storage.message);
});

app.get('/two', (req, res) => {
  res.status(200).send(req.query.upper === false ? storage.message.toUpperCase() : storage.message);
})

app.get('/three', (req, res) => {
  res.status(200).send(storage.message)
})

app.post('/two', (req, res) => {
  console.log('req.body received is:', req.body)

  if(req.body.key && req.body.value){
    storage[req.body.key] = req.body.value;
    res.status(200).send(`Successfully stored ${req.body.key} with value ${req.body.value}`);
  } else {
    res.status(400).send(`Missing 'key' and/or 'value' on request body.`);
  }
});

app.put('/three', (req, res) => {
  if (req.body.message) {
    storage.message = req.body.message;
    res.status(200).send(`Successfully updated stored message to ${req.body.message}`);
  } else {
    res.status(400).send(`Missing 'message' on request body.`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})