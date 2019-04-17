const FormView = require('./views/form.js');
const Result = require('./views/result.js');
const Calculation = require('./models/calculation.js');


document.addEventListener('DOMContentLoaded', () => {

  const form = new FormView();
  form.bindEvents();

  const calculation = new Calculation();
  calculation.bindEvents();

  const result = new Result();
  result.bindEvents();
});
