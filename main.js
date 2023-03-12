function createQuestion() {
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);
  const calcSignList = ["+", "-", "×", "÷"];
  const calcSign =
    calcSignList[Math.floor(Math.random() * calcSignList.length)];

  const getResult = () => {
    if (calcSign === calcSignList[0]) {
      return firstNumber + secondNumber;
    }
    if (calcSign === calcSignList[1]) {
      return firstNumber - secondNumber;
    }
    if (calcSign === calcSignList[2]) {
      return firstNumber * secondNumber;
    }
    if (calcSign === calcSignList[3]) {
      return firstNumber / secondNumber;
    }
  };
  const result = getResult();
  return {
    number1: firstNumber,
    number2: secondNumber,
    sign: calcSign,
    answer: result,
  };
}

const question = createQuestion();
console.log(question);
