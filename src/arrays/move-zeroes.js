const moveZeroes = (nums) => {
  const lastItem = nums.length;

  nums.forEach((number, index) => {
    if (index === lastItem - 1) {
      return nums;
    }

    if (number === 0) {
      nums.splice(index, 1);
      nums.push(0);
    }
  });

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
