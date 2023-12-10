import "./style.css";

const btns = document.querySelectorAll(".btn__number");
const outputMain = document.querySelector(".output-main");
const outputSecondary = document.querySelector(".output-secondary");
const operations = document.querySelectorAll(".btn__operation");

const CalcFactory = () => {
  return {
    firstOperand: "",
    secondOperand: 0,
    operation: "",
    result: 0,

    populateDOM(el: HTMLDivElement, val: string | number, operation: string) {
      el.textContent = `${val} ${operation || ""}`;
    },

    updateFirstOperand(val: Number | String) {
      this.firstOperand += val;
    },

    updateSecondOperand(val: number) {
      this.secondOperand = val;
      this.firstOperand = "";
    },

    setOperation(val: string) {
      this.operation = val;
    },

    computeResult(
      computeFn: (operation: string, a: number, b: number) => number
    ) {
      this.result = computeFn(
        this.operation,
        Number(this.firstOperand),
        Number(this.secondOperand)
      );
    },
  };
};

const OperatorFactory = () => {
  return {
    operate(operation: string, a: number, b: number) {
      switch (operation) {
        case "+":
          return this.add(a, b);
        case "-":
          return this.subtract(b, a);
        case "/":
          return this.divide(b, a);
        case "*":
          return this.muiltiply(a, b);

        default:
          alert("Something went wrong!");
          return -1;
      }
    },

    add(a: number, b: number) {
      return a + b;
    },

    subtract(a: number, b: number) {
      return a - b;
    },

    muiltiply(a: number, b: number) {
      return a * b;
    },

    divide(a: number, b: number) {
      return a / b;
    },
  };
};

const calculator = CalcFactory();
const operator = OperatorFactory();

btns.forEach((el) =>
  el.addEventListener("click", (e: any) => {
    calculator.updateFirstOperand(e.target!.textContent as string);

    calculator.populateDOM(
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

      calculator.populateDOM(
        outputSecondary as HTMLDivElement,
        calculator.secondOperand,
        calculator.operation
      );

      calculator.populateDOM(outputMain as HTMLDivElement, "0", "");
    } else if (
      calculator.operation &&
      calculator.firstOperand &&
      calculator.secondOperand
    ) {
      calculator.computeResult(operator.operate.bind(operator));
      calculator.updateSecondOperand(calculator.result as number);

      calculator.populateDOM(
        outputSecondary as HTMLDivElement,
        calculator.result,
        e.target.textContent
      );
      calculator.populateDOM(outputMain as HTMLDivElement, 0, "");
      calculator.setOperation(e.target.textContent);
    } else {
      calculator.computeResult(operator.operate.bind(operator));
      calculator.updateSecondOperand(calculator.result as number);

      calculator.populateDOM(
        outputSecondary as HTMLDivElement,
        calculator.result,
        e.target.textContent
      );

      calculator.populateDOM(outputMain as HTMLDivElement, 0, "");
      calculator.setOperation("");
    }
  })
);
