var counterApp = {
  counter: 0, // our data source/where values are stored
  init: function(){
    this.cacheDom();
    this.addEventListeners();
    this.render();
  },
  cacheDom: function(){ //grabs the elements in the DOM   this(counterApp).variable is part of the caching process
    this.subtractButton = document.querySelector('#subtractOne');
    this.addButton = document.querySelector('#addOne');
    this.counterNumber = document.querySelector('#counter');
  },
  addEventListeners: function(){ //waits for the click on the create button
    this.subtractButton.addEventListener('click', this.subtractNumber); //this.subtractNumber - run this function
    this.addButton.addEventListener('click', this.addNumber); //this.addNumber - run this function
  },
  render: function(){
    console.log(counterApp.counter);
    this.counterNumber.innerHTML = counterApp.formatNumber(counterApp.counter); //interprets HTML in javascript versus reading it as text (innerText)
  },
  formatNumber: function(counter){ //this is a method
  return `<h2>${counter}</h2>`; //template literal - this is a single string
  },
  subtractNumber: function (){
     counterApp.counter -= 1
     counterApp.render();
  },
  addNumber: function (){
     counterApp.counter += 1
     counterApp.render();
  }
};

  counterApp.init(); // will run init
