// import CalcFactory from "./factories/calculatorFactory";
// import DomFactory from "./factories/domFactory";
// import OperatorFactory from "./factories/operatorFactory";
// import "./style.css";

// const btns = document.querySelectorAll(".btn__number");
// const outputMain = document.querySelector(".output-main");
// const outputSecondary = document.querySelector(".output-secondary");
// const operations = document.querySelectorAll(".btn__operation");

// const calculator = new CalcFactory();
// const operator = new OperatorFactory();
// const domUpdater = new DomFactory();

// const prortype = Object.getPrototypeOf(calculator).constructor;

// btns.forEach((el) =>
//   el.addEventListener("click", (e: any) => {
//     calculator.updateFirstOperand(e.target!.textContent as string);

//     domUpdater.populateDOM(
//       outputMain as HTMLDivElement,
//       calculator.firstOperand,
//       ""
//     );
//   })
// );

// operations?.forEach((el) =>
//   el.addEventListener("click", (e: any) => {
//     if (!calculator.operation && !calculator.secondOperand) {
//       calculator.updateSecondOperand(Number(calculator.firstOperand));
//       calculator.setOperation(e.target.textContent);

//       domUpdater.populateDOM(
//         outputSecondary as HTMLDivElement,
//         calculator.secondOperand,
//         calculator.operation
//       );

//       domUpdater.populateDOM(outputMain as HTMLDivElement, "0", "");
//     } else if (
//       calculator.operation &&
//       calculator.firstOperand &&
//       calculator.secondOperand
//     ) {
//       calculator.computeResult(operator.operate.bind(operator));
//       calculator.updateSecondOperand(calculator.result as number);

//       domUpdater.populateDOM(
//         outputSecondary as HTMLDivElement,
//         calculator.result,
//         e.target.textContent
//       );
//       domUpdater.populateDOM(outputMain as HTMLDivElement, 0, "");
//       calculator.setOperation(e.target.textContent);
//     } else {
//       calculator.computeResult(operator.operate.bind(operator));
//       calculator.updateSecondOperand(calculator.result as number);

//       domUpdater.populateDOM(
//         outputSecondary as HTMLDivElement,
//         calculator.result,
//         e.target.textContent
//       );

//       domUpdater.populateDOM(outputMain as HTMLDivElement, 0, "");
//       calculator.setOperation("");
//     }
//   })
// );

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

// const user = {
//   id: crypto.randomUUID(),
//   name: "Nemanja",
//   lastName: "Malesija",
//   adress: {
//     country: "Montenegro",
//     city: "Podgorica",
//     street: "Vukosava Bozovica b.b.",
//     socialMedia: {
//       facebook: "Nemanja Malesija",
//       instagram: "nemanjamalesija",
//     },
//   },

//   friends: [
//     {
//       id: crypto.randomUUID(),
//       name: "Gordana",
//       lastName: "Stouns",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Petar",
//       lastName: "Pan",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Kilibarda",
//       lastName: "Petrovska",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Majda",
//       lastName: "Odzaklijevska",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Hoklberi",
//       lastName: "Haund",
//     },
//     {
//       id: crypto.randomUUID(),
//       name: "Sadam",
//       lastName: "Husein",
//     },
//   ],

//   posts: [
//     {
//       id: crypto.randomUUID(),
//       postText: "Danas se osjecam kao Knez mihajlova",
//       likes: [
//         {
//           name: "Gordana",
//           lastName: "Stouns",
//         },
//         {
//           name: "Petar",
//           lastName: "Pan",
//         },
//       ],
//       comments: [
//         {
//           name: "Gordana",
//           lastName: "Stouns",
//           commentText: "Hahaha, ti preludi djecace",
//         },
//         {
//           name: "Sadam",
//           lastName: "Husein",
//           commentText: "Mi smo dvije strane istog novcica",
//         },
//         {
//           name: "Petar",
//           lastName: "Pan",
//           commentText: "Nekad kasljem, nekad vodu nosim",
//         },
//       ],
//     },
//     {
//       id: crypto.randomUUID(),
//       postText: "Iskasljao sam danas jedan zeleni klobuk",
//       likes: [
//         {
//           name: "Hoklberi",
//           lastName: "Haund",
//         },
//       ],
//       comments: [],
//     },
//     {
//       id: crypto.randomUUID(),
//       postText: "Ako umremo, umrecemo zajedno",
//       likes: [
//         { name: "Kilibarda", lastName: "Petrovska" },
//         { name: "Petar", lastName: "Pan" },
//         { name: "Sadam", lastName: "Husein" },
//         { name: "Maja", lastName: "Odzaklijevska" },
//       ],
//       comments: [
//         {
//           name: "Gordana",
//           lastName: "Stouns",
//           commentText: "Zna se ko kosi, a ko vodu nosi",
//         },
//         {
//           name: "Sadam",
//           lastName: "Husein",
//           commentText: "Zaspati necu, ali umreti necu nikada",
//         },
//         {
//           name: "Hoklberi",
//           lastName: "Haund",
//           commentText: "Snekakos proljeca, ja se sjetim starih drugova",
//         },
//         {
//           name: "Majda",
//           lastName: "Odzaklijevska",
//           commentText: "Plastimo sijeno na Hilandar",
//         },
//       ],
//     },
//   ],
// };
// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const counterCreator = () => {
//   let count = 0;

//   const incrementCount = () => (count = +count + 1);
//   const getCount = () => count;

//   return {
//     incrementCount,
//     getCount,
//   };
// };

// const counter1 = counterCreator();
// const counter2 = counterCreator();

// console.log(counter1);
// console.log(counter2);

// const array = [1, 2, 3];

// array.map();
// array.forEach();
// array.filter();
// console.log(array);

// function sasa(name) {
//   this.name = name;
// }

// sasa.prototype.scream = function () {
//   console.log(this.name + " scream");
// };

// sasa.prototype.fly = function () {
//   console.log("flying");
// };

// const aa = new sasa("Sasa");
// const bb = new sasa("Nemanja");

// aa.scream();
// bb.scream();

// console.log(aa);
// console.log(bb);

// class Sasa {
//   constructor(name) {
//     this.name = name;
//   }

//   fly() {
//     console.log("flyyy");
//   }
// }

// const cc = new Sasa("sasa");

const basicURL = "https://restcountries.com/v3.1ssswss";

async function fetchAllCountries() {
  try {
    const response = await fetch(`${basicURL}/all`);
    const data = await response.json();
    countries.setCountries(data);
  } catch (error) {
    console.log(error);
  }
}
