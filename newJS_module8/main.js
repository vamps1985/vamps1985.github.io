/*
 Напишите скрипт который реализует следующее поведение:

 - При нажатии на клавишу (не виртуальной клавиатуры) должно
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)

 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).

 - Звук нажатия на клавишу должен соответсвовать ноте, описанной
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.

 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши.
*/

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};
const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
let mass = keys.push(" ");

window.onkeydown = function(event) {
  let z = event.key;
  let q = event.code;
  let arr = document.getElementsByTagName('button');
  for (let x = 0; x < arr.length; x++) {
    if ((keys[x]) == z) {
      let muz = document.getElementsByTagName('audio');
      arr[x].classList.add("keyboard__btn--active");
      let but_sound = arr[x].getAttribute("data-note");
      let slideThree = document.getElementById('slideThree');
      if (slideThree.checked) {
        for (var v = 0; v < muz.length; v++) {
          let s = muz[v].getAttribute("data-note");
          if (but_sound == s) {
            muz[v].pause();
            muz[v].currentTime = 0;
            muz[v].play();
          }
        }
      }
    }
  }
};
window.onkeyup = function(event) {
  let arr1 = document.querySelectorAll("button.keyboard__btn.keyboard__btn--active");
  for (var c = 0; c < arr1.length; c++) {
    arr1[c].classList.remove("keyboard__btn--active");
  }
};
