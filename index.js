const freelancers = [
  {name: 'Alice', occupation: 'Writer', startingPrice: 30},
  {name: 'Bob', occupation: 'Teacher', startingPrice: 50},
  {name: 'Carol', occupation: 'Programmer', startingPrice: 70},
  {name: 'Master Roshi', occupation: 'Legendary Martial Arts Teacher', startingPrice: 500},
  {name: 'Mario', occupation: 'Plumber', startingPrice: 100},
  {name: 'Lindsay', occupation: 'Chef', startingPrice: 40},
  {name: 'Barb', occupation: 'Dog Trainer', startingPrice: 60},
  {name: 'Tony', occupation: 'Barber', startingPrice: 80},
  {name: 'George', occupation: 'Gardener', startingPrice: 30}
];

let freeLancersAdded = 2;


const addFreelancer1 = setInterval(() => {

  if (freeLancersAdded < freelancers.length) {
  const nameSpot1 = document.querySelector('#name-dest');
  const newName = document.createElement('h4');
  newName.innerText = (freelancers[`${freeLancersAdded}`].name);
  nameSpot1.append(newName);

  const occupationSpot1 = document.querySelector(`#occupation-dest`);
  const newOccupation = document.createElement('h4');
  newOccupation.innerText = (freelancers[`${freeLancersAdded}`].occupation);
  occupationSpot1.append(newOccupation);

  const priceSpot1 = document.querySelector(`#price-dest`);
  const newPrice = document.createElement('h4');
  newPrice.innerText = (freelancers[`${freeLancersAdded}`].startingPrice);
  priceSpot1.append(newPrice);
  freeLancersAdded = freeLancersAdded +1;
  // console.log(freeLancersAdded);      //TEST
  }

  const averageSpot = document.querySelector(`#average-dollars`);

  if (averageSpot.innerText = 40) {
  let totalPrice = freelancers.slice(0, freeLancersAdded).reduce((accumulator, currentValue) =>
    accumulator + currentValue.startingPrice, 0);
  let currentAverage = totalPrice / freeLancersAdded;
  averageSpot.innerText = currentAverage.toFixed(2);
  // console.log(typeof freelancers.startingPrice)  //TEST
  }

  if (freeLancersAdded === freelancers.length) {
    clearInterval(addFreelancer1);
  }
}, 2700)
