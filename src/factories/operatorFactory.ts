export default function OperatorFactory() {}

OperatorFactory.prototype.add = function (a: number, b: number) {
  return a + b;
};

OperatorFactory.prototype.subtract = function (a: number, b: number) {
  return b - a;
};

OperatorFactory.prototype.multiply = function (a: number, b: number) {
  return a * b;
};

OperatorFactory.prototype.divide = function (a: number, b: number) {
  return b / a;
};

OperatorFactory.prototype.operate = function (
  operation: string,
  a: number,
  b: number
) {
  switch (operation) {
    case "+":
      return this.add(a, b);
    case "-":
      return this.subtract(b, a);
    case "/":
      return this.divide(b, a);
    case "*":
      return this.multiply(a, b);

    default:
      alert("Something went wrong!");
      return -1;
  }
};
