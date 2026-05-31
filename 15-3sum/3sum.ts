const twoSum = (num: number[], index: number, target: number): number[][] => {
    // Note: Array sorting is handled in threeSum, so we don't necessarily need to sort it again here.
    let left = index;
    let right = num.length - 1;
    let pairs:number[][] = []
    while (left < right) {
        const sum = num[left] + num[right];

        if (sum === target) {
            pairs.push([num[left], num[right]])
            left+=1
            right-=1
            while(left < right && num[left] == num[left-1]) left+=1
            while(left < right && num[right] == num[right+1]) right-=1
        } else if (sum < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    
    // Fix 2: Provide a fallback return statement if no match is found
    return pairs; 
};

// Fix 1: Changed return type from : void to : number[][]
const threeSum = (nums: number[]): number[][] => {
    nums.sort((a, b) => a - b);
    let trips: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Fix 3: Skip duplicate values for the first element to avoid identical triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let twoSumAns = twoSum(nums, i + 1, -nums[i]);

        // Check if a valid pair was actually found (array length will be 2)
        for(let pair of twoSumAns){
            trips.push([nums[i],...pair])
        }
    }
    return trips;
};
