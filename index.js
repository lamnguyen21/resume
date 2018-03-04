const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataStore = require('./utils/datastore').dataStore;
const {validateInput, ValidationError} = require('./utils/validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/uploadResumeDetails', (req, res, next) => {
  const input = req.body;
  const err = validateInput(input);

  if (err) {
    next(err);
  }

  const id = dataStore.save(input);
  res.json({id});
});

app.get('/api/getResume/:id', (req, res) => {
  const id = req.params.id;

  const result = dataStore.find(id);
  if (result) {
    res.json(result);
  }
  else {
    res.json({err: -1});
  }
});

// error handlers
app.use((err, req, res, next) => {
  if (req.xhr) {
    console.log(err);
    if (err instanceof ValidationError) {
        res.status(500).send({err: err.message});
    }
    else {
        res.status(500).send({err: -500});
    }
  }
  else {
    next(err);
  }
});

app.listen(5000);
