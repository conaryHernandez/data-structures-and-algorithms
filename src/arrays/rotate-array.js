const rotateArray = (arr, steps) => {
  const output = [];

  arr.some((_, index) => {
    if (index < steps) {
      output.push(arr.pop());

      return false;
    }

    return true;
  });

  return [...output.reverse(), ...arr];
};

console.log(rotateArray([-1, -100, 3, 99], 3));
