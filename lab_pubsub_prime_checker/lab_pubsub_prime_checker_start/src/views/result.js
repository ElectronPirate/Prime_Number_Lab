const PubSub = require('../helper/pub_sub.js');

class Result {

  bindEvents(){
    PubSub.subscribe('Calculation:result-calculated', (event) => {
      const result = event.detail;
      console.log(result);
      this.displayResult(result);
    })
  }

displayResult(result){
  const resultElement = document.querySelector('#result')
    if (result){
      resultElement.textContent = "you have entered a prime number"
    }else{
      resultElement.textContent = "this is not a prime number"
    }
  }

}

module.exports = Result;
