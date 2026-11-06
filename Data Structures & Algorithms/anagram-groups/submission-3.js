class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map(); 
    
        for(let str of strs) {
            const storeOccurances = new Array(26).fill(0);

            for(let i=0; i<str.length; i++) {
                const code = str.charCodeAt(i) - 97;
                storeOccurances[code] = storeOccurances[code] + 1;
            }

            let intoString = storeOccurances.join(',');

            if(!map.has(intoString)) {
                map.set(intoString, []);
            }

            map.get(intoString).push(str);

           // console.log("Map: ", map);
        }
    
        return [...map.values()];
    }
}
