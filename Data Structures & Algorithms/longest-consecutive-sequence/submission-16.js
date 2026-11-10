class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0;
        let set = new Set(nums);

        var store = new Array();
        var longest = 0;

        for(let i=0; i<nums.length; i++) {
            if(!set.has(nums[i] - 1)) {
                let nos = nums[i];
                let currentStreak = 1;
                while(set.has(nos + 1)) {
                    currentStreak++;
                    nos++;
                }
                if(currentStreak > longest) {
                    longest = currentStreak;
                }
            }
        }
        return longest;
    }
}
