var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; ++i) {
    let cur = nums[i];
    let x = target - cur;
    if (map.hasOwnProperty(x)) {
      return [map[x], i];
    }

    map[cur] = i;
  }
  return [];
};
