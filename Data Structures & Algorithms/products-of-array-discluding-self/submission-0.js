class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = new Array();
        result[0] = 1;

        for(let i=1; i<nums.length; i++) {
            result[i] = result[i-1] * nums[i-1]; 
        }

        var postfix = 1;
        for(let i=nums.length-2; i>=0; i--) {
            postfix = postfix * nums[i+1];
            result[i] = result[i] * postfix;
        }

        return result;

    }
}
