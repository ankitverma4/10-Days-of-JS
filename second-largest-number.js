function getSecondLargest(nums) {
    nums.sort((a, b) => {
        if (a == b) return 0;
        else if (a < b) return -1;
        else return 1;
    });

    // If largest number is multiple
    let largestNumber = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        let num = nums[i];
        if (num !== largestNumber)
            return num;
    }
}

let array = [2, 3, 6, 6, 5];
console.log(getSecondLargest(array));