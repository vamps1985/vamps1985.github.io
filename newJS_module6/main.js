
const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabetRu = "йцукенгшщзхъфывапролджэ\\ячсмитьбю.";
const alphabetUa = "йцукенгшщзхїфівапролджє\\ячсмитьбю.";
let keyTrainer = {
  layouts: {
  },
  currentLang: "",
  numberTrain: cheknumberTrain,
  randNum: getRandCharInAlph,
  addKeyboardLayout: function(alphabet, lang) {
    this.currentLang = lang;
    this.numberTrain();
    this.layouts[lang] = {
      topRow: [],
      middleRow: [],
      bottomRow: []
    },
    this.layouts[lang].topRow = [alphabet.slice(0, 12)],
    this.layouts[lang].middleRow = [alphabet.slice(12, 23)],
    this.layouts[lang].bottomRow = [alphabet.slice(23)],
    keyTrainer.randNum();
  }
};

function getRandCharInAlph() {
  let lang = this.currentLang.replace("\"", "");
  let mass = this.layouts[lang];
  let str1 = "";
  let rand1 = [];
  for (let i in mass) {
    if (mass.hasOwnProperty(i)) {
    let x = mass[i];
    for (let variable in x) {
      if (x.hasOwnProperty(variable)) {
      str1 = str1 + (x[variable]);
    }
  }
}
}
  for (let r = 0; r < this.numberTrain; r++) {
    let randomIn = Math.floor(Math.random() * (str1.length - 0)) + 0;
    rand1.push(str1[randomIn]);
  }
  for (let p = 0; p < rand1.length; p++) {
    console.log(rand1[p]);
  }
  nextChar(rand1);
}
function nextChar(a) {
  let erors = 0;
  let fine = 0;
  for (let i = 0; i < a.length; i++) {
    let num2 = prompt(`Введите символ "${a[i]}" и нажмите Enter`);
    if (num2 === a[i]) {
      fine = fine + 1;

    } else {
      erors = erors + 1;
    }
  }
  alert(`Результат вашего упражнения
правильно: ${fine}
не правильно: ${erors}
`);
}
function getLang() {
  let alphabet;
  let currentLang = prompt(
    `Введите букву алфавита какую хотите использовать клавиатуру
en-0
ru-1
ua-2`);
  if ((currentLang === "0") || (currentLang === "2") || (currentLang === "1")) {
    switch (currentLang) {
      case "0":
        this.currentLang = "en";
        alphabet = alphabetEn;
        keyTrainer.addKeyboardLayout(alphabet, this.currentLang);
        break;
      case "1":
        this.currentLang = "ru";
        alphabet = alphabetRu;
        keyTrainer.addKeyboardLayout(alphabet, this.currentLang);
        break;
      case "2":
        this.currentLang = "ua";
        alphabet = alphabetUa;
        keyTrainer.addKeyboardLayout(alphabet, this.currentLang);
        break;
      default:
    }
  } else if (((currentLang > 0) && (currentLang > 0)) || (typeof(currentLang) === "string")) {
    alert("был выбран не доступный язык");
    getLang();
  } 
}
function cheknumberTrain() {
  alert(`перед началом упражнения убедитесь что расккладка Вашей клавиатуры ${this.currentLang}`);
  let num = prompt("введите количество букв для тренировки");
  if (num!=null) {
  if (!(isNaN(num))) {
    this.numberTrain = num;
    console.log(num);
  } else if ((typeof num)==="string") {
    alert("Вы ввели не число");
    console.log(num);
    return cheknumberTrain();
  } else {
    console.log(num);
  }
} 
}
getLang();

//keyTrainer.numberTrain;

