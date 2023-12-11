import CalcFactory from "./factories/calculatorFactory";
import OperatorFactory from "./factories/operatorFactory";
import "./style.css";

const btns = document.querySelectorAll(".btn__number");
const outputMain = document.querySelector(".output-main");
const outputSecondary = document.querySelector(".output-secondary");
const operations = document.querySelectorAll(".btn__operation");

const calculator = new CalcFactory();
const operator = new OperatorFactory();

console.log(calculator);

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
