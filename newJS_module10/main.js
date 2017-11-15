
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");

/*
* Simple object respresenting
* a single timer instance

*/
if (localStorage.getItem("rez")!=null) {
  let span = localStorage.getItem("rez");
  document.getElementById('rez').innerHTML = ("Ваш лучшый результат  " + span + " правильно нажатых клавиш за секунду");
}


const timer = {
  id: null,
  startTime: null,
  totalTime: null,
  isActive: false,
  start() {
    this.isActive = true;
    this.startTime = Date.now();
    this.id = setInterval(() => {
      this.totalTime = Date.now() - this.startTime;
      timerOutput.textContent = this.totalTime;
    }, 100);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.id);
  }
};

const renderKeyboard = chars => {
  let row = "";
  chars.forEach(char => {
    row += `<button>${char}</button>`;
  });

  document.querySelector(".keyboard").innerHTML = row;
};

const renderExercise = str => {
  let htmlStr = "";

  str.split("").forEach(char => {
    htmlStr += `<span>${char}</span>`;
  });

  document.querySelector(".exercise").innerHTML = htmlStr;
};

const countKPS = (time, keys) => (keys / (time / 1000)).toFixed(1);

/*
* On key press
* @param {event} e
*/
const onKeyPress = e => {
  if (!timer.isActive) {
    timer.start();
  }

  if (e.key === charsArr[charsArr.length - 1]) {
    charsArr.pop();
    console.log(charsArr);

    if (charsArr.length === 0) {
      timer.stop();

      console.log(countKPS(timer.totalTime, string.length));
      let rez1 = countKPS(timer.totalTime, string.length);
      let rez = localStorage.getItem("rez");

      if (rez < rez1) {
        localStorage.removeItem('rez');
        localStorage.setItem('rez', rez1);
      };
    }
  }
};




renderExercise(string);
renderKeyboard(lang.split(""));
window.addEventListener("keypress", onKeyPress);
