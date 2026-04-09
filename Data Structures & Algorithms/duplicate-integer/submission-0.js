class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let isSeen = {}; 

        for(let i = 0; i<nums.length; i++){
            if(isSeen[nums[i]]){
                isSeen[nums[i]] ++
            }else{
                isSeen[nums[i]] = 1
            }
        } 

        for(let key in isSeen){
            if(isSeen[key] > 1){
                return true
            }
        }
        return false
    } 

    
} 

const sol = new Solution()
console.log(sol.hasDuplicate([1,2,3,3]))
