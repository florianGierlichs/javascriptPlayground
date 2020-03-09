import './index.scss';

const container = document.createElement('div');
container.className = 'countdown';
document.body.appendChild(container);

// Nesting
// setTimeout(() => {
//   container.innerText = 'Ready';
//   setTimeout(() => {
//     container.innerText = 'Steady';

//     setTimeout(() => {
//       container.innerText = 'Go!!';
//     }, 1000);
//   }, 1000);
// }, 1000);

function waitFor(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// Chaining
// waitFor(2000)
//   .then(() => {
//     container.innerText = 'Ready';
//     return waitFor(2000);
//   })
//   .then(() => {
//     container.innerText = 'Steady';
//     return waitFor(2000);
//   })
//   .then(() => {
//     container.innerText = 'Go';
//   });

function setInnerText(text) {
  container.innerText = text;
}

async function animateZoomIn() {
  container.classList.remove('animate');
  await waitFor(10);
  container.classList.add('animate');
}

// Returns a random number between 0 and 100 after 1000ms
// Promise, resolve, setTimeout, Math.random, Math.floor
function getRandomNumber(min, max) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      if (randomNumber >= (max - min) / 2 + min) {
        reject('Invalid number!');
      } else {
        resolve(randomNumber);
      }
    }, 1000);
  });
}

// function getRandomNumber(min, max) {
//   const randomNumber = Math.floor(Math.random() * (max - min)) + min;
//   if (randomNumber >= (max - min) / 2 + min) {
//     throw new Error('Invalid number');
//   }
//   return randomNumber;
// }

async function runCountdown() {
  await waitFor(1000);
  await animateZoomIn();
  setInnerText('Ready');
  await waitFor(1000);
  await animateZoomIn();
  setInnerText('Steady');
  await waitFor(1000);
  await animateZoomIn();
  setInnerText('Go!!!');

  try {
    const randomNumber = await getRandomNumber(0, 100);
    setInnerText(randomNumber);
  } catch (error) {
    setInnerText('Error: ' + error.message);
  }
}
runCountdown();

// async function run() {
//   const randomNumber = await getRandomNumber();
//   container.innerText = randomNumber;
// }

// run();
