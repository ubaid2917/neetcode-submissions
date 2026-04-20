class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let map = {}; 
        
        for(let word of strs){
            let sorted = word.split('').sort().join('');

            if(!map[sorted]){
                map[sorted] = []
            } 

            map[sorted].push(word)
        }
        return Object.values(map)
    } 
}

let sol = new Solution();
console.log(sol.groupAnagrams(["act","pots","tops","cat","stop","hat"]))
