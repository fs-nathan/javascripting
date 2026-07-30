function maxSubArray(nums) {
  if (nums.length === 0) return 0;

  let currentSum = nums[0];
  let maxSum = nums[0];


  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    
    currentSum = Math.max(num, currentSum + num);
    
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}


module.exports = maxSubArray;