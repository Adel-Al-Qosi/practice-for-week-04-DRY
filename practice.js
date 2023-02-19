function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = compare(num1, num2, true);

  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = compare(num1, num2, true);

  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = compare(sum1, sum2, true);

  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = compare(weight1, weight2, false);

  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

function compare(num1, num2, condition) {
  if (condition) {
    return num1 > num2 ? num1 : num2;
  } else {
    return num1 > num2 ? num2 : num1;
  }
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
