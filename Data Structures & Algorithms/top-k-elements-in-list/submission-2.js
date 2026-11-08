class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
   /* topKFrequent(nums, k) { // O(logN)
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
    } */

   topKFrequent(nums, k) {
    let map = new Map();

    for(let i=0; i<nums.length; i++) { 
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let bucket = new Array();
    for(let i=0; i<=nums.length; i++) { // creating N+1 bucket array
        bucket.push([]);
    }

    for(const [count, freq] of map) {
        bucket[freq].push(count);
    }

    let result = new Array();
    for(let i=bucket.length - 1; i >= 0 ; i--) {
        if(bucket[i].length > 0) { // if array is not empty
            result.push(...bucket[i]); // we don't want to push array but only values
        }

        if(result.length == k) {
            return result;
        }
    }

   }
}
