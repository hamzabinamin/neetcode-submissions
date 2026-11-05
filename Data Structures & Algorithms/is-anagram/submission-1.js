class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map();
        const tMap = new Map();

        if(s.length != t.length) return false

        for(let i=0; i<s.length; i++) {
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
            tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
        }

        console.log("sMap: ", sMap);
        console.log("tMap: ", tMap);

        for(const [key, value] of sMap) {
            if(!tMap.has(key) || tMap.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
}
