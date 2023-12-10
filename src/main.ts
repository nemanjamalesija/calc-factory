import "./style.css";

const btns = document.querySelectorAll(".btn__number");
const outputMain = document.querySelector(".output-main");

const CalcFactory = () => {
  return {
    firstOperand: "",
    secondOperand: "",

    populateDOM(el: HTMLDivElement) {
      el.textContent = this.firstOperand;
    },

    updateFirstOperand(val: String) {
      this.firstOperand += Number(val);
    },

    add(a: number, b: number) {
      return a + b;
    },

    subtract(a: number, b: number) {
      return a - b;
    },

    muiltiply(a: number, b: number) {
      return a + b;
    },

    divide(a: number, b: number) {
      return a / b;
    },
  };
};

const calculator = CalcFactory();

btns.forEach((el) =>
  el.addEventListener("click", (e) => {
    calculator.updateFirstOperand(e.target.textContent);

    calculator.populateDOM(outputMain as HTMLDivElement);
  })
);
