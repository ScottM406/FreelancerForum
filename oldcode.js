const freelancers = [
  {name: 'Alice', occupation: 'Writer', startingPrice: 30},
  {name: 'Bob', occupation: 'Teacher', startingPrice: 50},
  {name: 'Carol', occupation: 'Programmer', startingPrice: 70},
  {name: 'Master Roshi', occupation: 'Legendary Martial Arts Teacher', startingPrice: 500}
];

const addFreelancer1 = setInterval(() => {

  const nameSpot1 = document.querySelector(`#name-dest`)
  nameSpot1.innerText = (freelancers[2].name)

  const occupationSpot1 = document.querySelector(`#occupation-dest`)
  occupationSpot1.innerText = (freelancers[2].occupation)

  const priceSpot1 = document.querySelector(`#price-dest`)
  priceSpot1.innerText = (freelancers[2].startingPrice)

  const averageSpot = document.querySelector(`#average-dollars`)

  if (averageSpot.innerText = 40) {
  let currentAverage = Number(averageSpot.innerText);
  averageSpot.innerText = ((freelancers[0].startingPrice + freelancers[1].startingPrice + freelancers[2].startingPrice)) / (freelancers.length - 1);
  }

  if (nameSpot1.length && occupationSpot1.length && priceSpot1.length) {
    clearInterval(addFreelancer1);
  }
}, 2700)

const addFreelancer2 = setInterval(() => {

  const nameSpot2 = document.querySelector(`#name-dest-2`)
  nameSpot2.innerText = (freelancers[3].name)

  const occupationSpot2 = document.querySelector(`#occupation-dest-2`)
  occupationSpot2.innerText = (freelancers[3].occupation)

  const priceSpot2 = document.querySelector(`#price-dest-2`)
  priceSpot2.innerText = (freelancers[3].startingPrice)

  const averageSpot = document.querySelector(`#average-dollars`)

  if (averageSpot.innerText = 50) {
  let currentAverage = Number(averageSpot.innerText);
  averageSpot.innerText = ((freelancers[0].startingPrice + freelancers[1].startingPrice + freelancers[2].startingPrice + freelancers[3].startingPrice)) / freelancers.length;
  }

  if (averageSpot.innerText = 162.5) {
  clearInterval(addFreelancer2);
  clearInterval(addFreelancer1);
  }
}, 5400)
