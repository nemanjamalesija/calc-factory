export default function CalcFactory() {
  this.firstOperand = "";
  this.secondOperand = 0;
  this.operation = "";
  this.result = 0;
}

CalcFactory.prototype.populateDOM = function (
  el: HTMLDivElement,
  val: string | number,
  operation: string
) {
  el.textContent = `${val} ${operation || ""}`;
};

CalcFactory.prototype.updateFirstOperand = function (val: string) {
  this.firstOperand += val;
};

CalcFactory.prototype.updateSecondOperand = function (val: string | number) {
  this.secondOperand = val;
  this.firstOperand = "";
};

CalcFactory.prototype.setOperation = function (val: string) {
  this.operation = val;
};

CalcFactory.prototype.computeResult = function (computeFn: any) {
  this.result = computeFn(
    this.operation,
    Number(this.firstOperand),
    Number(this.secondOperand)
  );
};
