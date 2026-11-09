class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length == 0) return "";

        var appendedString = "";

        for(let str of strs) {
            let count = str.length;
            appendedString = appendedString + count + "#" + str;
        } 
        console.log("appendedString: ", appendedString);
        return appendedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length == 0) return [];

        const result = new Array();
        let i = 0;
        while(i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = Number(str.slice(i, j));
            i = j + 1;
            result.push(str.slice(i, length + i));
            i = i + length;
        }
        return result;
    }

    isNumeric(char) {
        let code = char.charCodeAt(0);
        return (code >= 48 && code <=57)
        }

    
}
