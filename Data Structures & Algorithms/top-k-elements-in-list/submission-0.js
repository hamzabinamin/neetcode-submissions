class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let i=0; i<nums.length; i++) {
            if(map.has(nums[i])) {
                map.set(nums[i], (map.get(nums[i]) || 0) + 1)
            }
            else {
                map.set(nums[i], 1)
            }
        }
        console.log("Map: ", map);

        const sortedArray = [...map.entries()].sort((a,b) => b[1] - a[1]);

        return sortedArray.slice(0, k).map(entry => entry[0]);

    }
}
