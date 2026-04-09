class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        s = s.split('').sort().join('');
        t = t.split('').sort().join(''); 

        if( s== t){
            return true
        }else{
            return false
        }
    }
} 

const sol = new Solution();
console.log(sol.isAnagram('racecar', 'carrace'))
