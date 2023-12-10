const CalcFactory = () => {
  return {
    firstOperand: 0,
    secondOperand: "",

    add() {
      return this.firstOperand + this.secondOperand;
    },
  };
};
