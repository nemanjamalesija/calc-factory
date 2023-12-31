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

const user = {
  id: crypto.randomUUID(),
  name: "Nemanja",
  lastName: "Malesija",
  adress: {
    country: "Montenegro",
    city: "Podgorica",
    street: "Vukosava Bozovica b.b.",
    socialMedia: {
      facebook: "Nemanja Malesija",
      instagram: "nemanjamalesija",
    },
  },

  friends: [
    {
      id: crypto.randomUUID(),
      name: "Gordana",
      lastName: "Stouns",
    },
    {
      id: crypto.randomUUID(),
      name: "Petar",
      lastName: "Pan",
    },
    {
      id: crypto.randomUUID(),
      name: "Kilibarda",
      lastName: "Petrovska",
    },
    {
      id: crypto.randomUUID(),
      name: "Majda",
      lastName: "Odzaklijevska",
    },
    {
      id: crypto.randomUUID(),
      name: "Hoklberi",
      lastName: "Haund",
    },
    {
      id: crypto.randomUUID(),
      name: "Sadam",
      lastName: "Husein",
    },
  ],

  posts: [
    {
      id: crypto.randomUUID(),
      postText: "Danas se osjecam kao Knez mihajlova",
      likes: [
        {
          name: "Gordana",
          lastName: "Stouns",
        },
        {
          name: "Petar",
          lastName: "Pan",
        },
      ],
      comments: [
        {
          name: "Gordana",
          lastName: "Stouns",
          commentText: "Hahaha, ti preludi djecace",
        },
        {
          name: "Sadam",
          lastName: "Husein",
          commentText: "Mi smo dvije strane istog novcica",
        },
        {
          name: "Petar",
          lastName: "Pan",
          commentText: "Nekad kasljem, nekad vodu nosim",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      postText: "Iskasljao sam danas jedan zeleni klobuk",
      likes: [
        {
          name: "Hoklberi",
          lastName: "Haund",
        },
      ],
      comments: [],
    },
    {
      id: crypto.randomUUID(),
      postText: "Ako umremo, umrecemo zajedno",
      likes: [
        { name: "Kilibarda", lastName: "Petrovska" },
        { name: "Petar", lastName: "Pan" },
        { name: "Sadam", lastName: "Husein" },
        { name: "Maja", lastName: "Odzaklijevska" },
      ],
      comments: [
        {
          name: "Gordana",
          lastName: "Stouns",
          commentText: "Zna se ko kosi, a ko vodu nosi",
        },
        {
          name: "Sadam",
          lastName: "Husein",
          commentText: "Zaspati necu, ali umreti necu nikada",
        },
        {
          name: "Hoklberi",
          lastName: "Haund",
          commentText: "Snekakos proljeca, ja se sjetim starih drugova",
        },
        {
          name: "Majda",
          lastName: "Odzaklijevska",
          commentText: "Plastimo sijeno na Hilandar",
        },
      ],
    },
  ],
};
