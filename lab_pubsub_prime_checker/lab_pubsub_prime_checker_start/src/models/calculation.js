const PubSub = require('../helper/pub_sub.js')

class Calculation {

  bindEvents() {
    PubSub.subscribe('FormView:text-submitted',(event) => {
      const inputNumber = event.detail;
      console.log(inputNumber);
      const result = this.getPrimeNumber(inputNumber);
      PubSub.publish('Calculation:result-calculated', result)
    })
  }

  getPrimeNumber(number){
    if (number <= 1){
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0){
        return false;
      }
    }
    return true;
  }

}
module.exports = Calculation;
