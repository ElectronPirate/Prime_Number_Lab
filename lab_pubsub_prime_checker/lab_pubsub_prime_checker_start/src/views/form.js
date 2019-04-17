const PubSub = require('../helper/pub_sub.js')

class FormView{
  bindEvents(){
    // reaching to DOM (index.html) to get id of element
    const form = document.querySelector('#prime-checker-form')
    // adding event listener to check if user enters data
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // storing a variable that the user submitted
      const inputNumber = event.target.number.value;
      // publish values from user input
      PubSub.publish('FormView:text-submitted', inputNumber)
    })
  }
}

module.exports = FormView;
