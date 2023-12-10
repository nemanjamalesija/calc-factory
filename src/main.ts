const CalcFactory = () => {
  return {
    firstOperand: 0,
    secondOperand: 0,

    add() {
      return this.firstOperand + this.secondOperand;
    },

    subtract() {
      return this.firstOperand - this.secondOperand;
    },

    muiltiply() {
      return this.firstOperand + this.secondOperand;
    },

    divide() {
      return this.firstOperand / this.secondOperand;
    },
  };
};
