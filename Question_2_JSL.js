const sumNum = (arr, target_num, result = [], hashtable = {}) => {
    arr.forEach((curr, i) => hashtable[target_num - curr] ? result.push(curr, target_num - curr) : hashtable[curr] = curr);
    return result.sort((a, b) => a - b);
}

console.log(sumNum([1, 2, 3], 4));



function twoSum(nums, target_num) {
    const map = [];
    const indexnum = [];

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] != null) {
            var index = map[nums[i]];
            indexnum[0] = nums[index];
            indexnum[1] = nums[i];
            break;
        } else {
            map[target_num - nums[i]] = i;
        }
    }
    return indexnum;
}

console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));