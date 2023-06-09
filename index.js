const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let timerId;
  return (seconds) => {
    if (seconds <=0 || seconds > 86400) {
      alert('Введите число от 0 до 86,400 (24 часа)')
      return
    }
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setInterval(() => {
      seconds -=1
      if(seconds <= 0) {
        clearInterval(timerId);
      }
      const hours = Math.floor(seconds / 3600);
      const resultHours = hours.toString().padStart(2, "0");

      const mins = Math.floor((seconds % 3600) / 60);
      const resultMins = mins.toString().padStart(2, "0");

      const secs = Math.floor((seconds % 3600) % 60);
      const resultSecs = secs.toString().padStart(2, "0");

      timerEl.textContent = `${resultHours}: ${resultMins}: ${resultSecs}`;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (event) => {
  event.target.value = event.target.value.match(/\d+/)
    ? event.target.value.match(/\d+/)[0]
    : null;
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
