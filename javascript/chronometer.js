class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start(callback) {
    this.intervalId = setInterval (() => {
      this.currentTime++; 
      if (callback) {
         callback(); 
      }
    }, 1000);
  }

  getMinutes() {
    const minutes = (this.currentTime - this.currentTime%60)/60
    return minutes; 
  }

  getSeconds() {
    const seconds = this.currentTime%60; 
    return seconds; 
  }

  computeTwoDigitNumber(value) {
    value = String(value)
    if (value.length == 1)
    value = "0" + value; 
    return value 
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds()); 
    return `${minutes}:${seconds}`; 
  }
    
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
