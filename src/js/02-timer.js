import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { selectors } from "./02-1-selectors";
import { convertMs } from "./02-2-time-convert";
import Notiflix from 'notiflix';







selectors.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate = selectedDates[0].getTime();
      const currentTime = Date.now();
      
      if (selectedDate <= currentTime) {
          Notiflix.Notify.failure("Please choose a date in the future");

          selectors.btnStart.disabled = true;
      } else
      { selectors.btnStart.disabled = false; }
    
  },
};

flatpickr(selectors.input, options)

let succesNotificationShown = false;

selectors.btnStart.addEventListener('click', startClickHandler)

function startClickHandler() {
   const intervalId = setInterval(() => {
        const selectedDate = new Date(selectors.input.value).getTime()
        const currentDate = Date.now()
        const differenceTime = selectedDate - currentDate;

        if (differenceTime <= 0) {
            resetTimerContent()
            if (!succesNotificationShown) {
                succesNotificationShown = true;
                   Notiflix.Notify.success('Time is up!');
            }
            clearInterval(intervalId);
            return
        }

        const timeValues = convertMs(differenceTime)

        updateTimerContent(timeValues)
       
        selectors.btnStart.disabled = true


    },1000)
}



function resetTimerContent() {
    selectors.days.textContent = '00';
    selectors.hours.textContent = '00';
    selectors.minutes.textContent = '00';
    selectors.seconds.textContent = '00'
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function updateTimerContent({ days, hours, minutes, seconds }) {
        selectors.days.textContent = addLeadingZero(days);
    selectors.hours.textContent = addLeadingZero(hours);
    selectors.minutes.textContent = addLeadingZero(minutes);
    selectors.seconds.textContent = addLeadingZero(seconds)
}