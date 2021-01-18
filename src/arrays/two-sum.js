/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const answer = [];

  nums.some((number) =>
    nums.find((_, index) => {
      const isEqualsToTarget =
        Number(number) + Number(nums[index + 1]) === target;

      if (isEqualsToTarget) {
        answer.push(index);
        answer.push(index + 1);

        return true;
      }

      return false;
    })
  );

  return answer;
};

twoSum([0, 1, 2, 3], 5);
