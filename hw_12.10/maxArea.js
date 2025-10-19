var maxArea = function (nums) {

    let size = nums.length;

    let left = 0;

    let right = size - 1;

    let max = 0;

    while (left < right) {

        const width = right - left;

        const height = Math.min(nums[left], nums[right]);

        max = Math.max(max, height * width);

        if (nums[left] < nums[right]) {

            ++left;
        }
        else {
            --right;
        }
    }
    return max;
}

const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(nums));