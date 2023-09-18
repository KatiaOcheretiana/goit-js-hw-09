import Notiflix from 'notiflix';


const selectors = {
  delayFirst: document.querySelector('[name = "delay"]'),
  delayStep: document.querySelector('[name = "step"]'),
  amound: document.querySelector('[name = "amount"]'),
  form: document.querySelector("form"),
}

selectors.form.addEventListener('submit', submitHandler)


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  }
)}

function submitHandler(event) {
  event.preventDefault()

  for (let i = 0; i < selectors.amound.value; i++) {
    createPromise(i + 1, Number(selectors.delayFirst.value) + Number(selectors.delayStep.value) * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
  }
}


