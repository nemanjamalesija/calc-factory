import CalcFactory from "./factories/calculatorFactory";
import DomFactory from "./factories/domFactory";
import OperatorFactory from "./factories/operatorFactory";
import "./style.css";

const btns = document.querySelectorAll(".btn__number");
const outputMain = document.querySelector(".output-main");
const outputSecondary = document.querySelector(".output-secondary");
const operations = document.querySelectorAll(".btn__operation");

const calculator = new CalcFactory();
const operator = new OperatorFactory();
const domUpdater = new DomFactory();

const prortype = Object.getPrototypeOf(calculator).constructor;

btns.forEach((el) =>
  el.addEventListener("click", (e: any) => {
    calculator.updateFirstOperand(e.target!.textContent as string);

    domUpdater.populateDOM(
      outputMain as HTMLDivElement,
      calculator.firstOperand,
      ""
    );
  })
);

operations?.forEach((el) =>
  el.addEventListener("click", (e: any) => {
    if (!calculator.operation && !calculator.secondOperand) {
      calculator.updateSecondOperand(Number(calculator.firstOperand));
      calculator.setOperation(e.target.textContent);

      domUpdater.populateDOM(
        outputSecondary as HTMLDivElement,
        calculator.secondOperand,
        calculator.operation
      );

      domUpdater.populateDOM(outputMain as HTMLDivElement, "0", "");
    } else if (
      calculator.operation &&
      calculator.firstOperand &&
      calculator.secondOperand
    ) {
      calculator.computeResult(operator.operate.bind(operator));
      calculator.updateSecondOperand(calculator.result as number);

      domUpdater.populateDOM(
        outputSecondary as HTMLDivElement,
        calculator.result,
        e.target.textContent
      );
      domUpdater.populateDOM(outputMain as HTMLDivElement, 0, "");
      calculator.setOperation(e.target.textContent);
    } else {
      calculator.computeResult(operator.operate.bind(operator));
      calculator.updateSecondOperand(calculator.result as number);

      domUpdater.populateDOM(
        outputSecondary as HTMLDivElement,
        calculator.result,
        e.target.textContent
      );

      domUpdater.populateDOM(outputMain as HTMLDivElement, 0, "");
      calculator.setOperation("");
    }
  })
);

// function initGame() {
//   let playerScore = 0;
//   let computerScore = 0;

//   const getPlayerScore = () => playerScore;
//   const getComputerScore = () => computerScore;

//   const IncrementPlayerScore = () => (playerScore += 1);
//   const IncrementComputerScore = () => (computerScore += 1);

//   return {
//     getPlayerScore,
//     getComputerScore,
//     IncrementPlayerScore,
//     IncrementComputerScore,
//   };
// }

// function initGame2() {
//   return {
//     playerScore: 0,
//     computerScore: 0,

//     getPlayerScore() {
//       return this.playerScore;
//     },

//     getComputedStyle() {
//       return this.computerScore;
//     },
//   };
// }

// const game = initGame2();

// function counterCreator() {
//   let count = 0;

//   const countIncrement = () => (count += 1);
//   const setCount = (num) => (count = num);
//   const getCount = () => count;

//   return { countIncrement, setCount, getCount };
// }

// const root = document.querySelector(".container");

// const counter = counterCreator();

// counter.countIncrement();
// counter.countIncrement();
// counter.countIncrement();
// counter.countIncrement();
// counter.countIncrement();
// counter.countIncrement();
// counter.countIncrement();
// counter.countIncrement();
// counter.countIncrement();
// counter.countIncrement();

// counter.setCount(50);

// root!.textContent = counter.getCount();

// const eraser = document.querySelector(".eraser");

// function cubeColorUpdaterCreator() {
//   let currentColor = "red";

//   const updateFieldColor = (element, color) => {
//     element.style.backgroundColor = color;
//   };

//   const getCurrentColor = () => currentColor;

//   const setCurrentColor = (newColor) => {
//     currentColor = newColor;
//   };

//   return {
//     updateFieldColor,
//     getCurrentColor,
//     setCurrentColor,
//   };
// }

// function cubeConstructor() {
//   const createCube = (rows, columns) => {
//     //// logika
//   };

//   const clearCube = () => {};

//   return { createCube, clearCube };
// }

// const cubeColorUpdater = cubeColorUpdaterCreator();
// const cube = cubeConstructor();

// cube.createCube(16, 16);

// eraser!.addEventListener("click", () =>
//   cubeColorUpdater.setCurrentColor("white")
// );

// setTimeout(() => console.log("timeout"), 0);

// const myPromise = Promise.resolve(() => console.log("promise"));
// myPromise.then((fn) => fn());

// console.log("aaaaaaa");

// for (let i = 0; i < 100; i++) {
//   console.log("loop");
// }

// const cnt = document.querySelector(".container");

// function counterCreator() {
//   let count = 0;

//   const getCount = () => count;
//   const setCount = (val) => val;
//   const incrementCount = () => (count += 1);

//   return {
//     getCount,
//     setCount,
//     incrementCount,
//   };
// }

// const counter1 = counterCreator();
// const counter2 = counterCreator();
// const counter3 = counterCreator();

// console.log(counter1);
// console.log(counter2);
// console.log(counter3);

// class Marc {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class John extends Marc {
//   constructor(name) {
//     super(name);
//   }
// }

// console.log(new Marc());

// console.log(new John());

// const sasa = {
//   profession: "police officerz",
// };

// const nemanja = sasa;
// nemanja.profession = "professor";

// console.log(nemanja);
// console.log(sasa);

// let sasaBroj = 5;
// let nemanjaBroj = sasaBroj;

// nemanjaBroj = 10;
// console.log(sasaBroj);

// const sir = {
//   blir: "klir",
//   key: {
//     nestedKey: "nested",
//   },
// };

// const sir2 = { ...sir, key: { ...sir.key } };
// sir2.blir = "mutirano";
// sir2.key.nestedKey = "mutirani nested key";

// console.log(sir);
// console.log(sir2);
