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
