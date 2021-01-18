const containsDuplicate = (nums) => {
  let numsMap = {};

  const hasDuplicate = nums.some((element) => {
    if (numsMap[element]) {
      return true;
    } else {
      numsMap[element] = 1;
    }
  });

  return hasDuplicate;
};

console.log(containsDuplicate([1, 2, 3, 4]));
