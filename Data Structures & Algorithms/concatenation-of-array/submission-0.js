class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let newArr = []; 

        for(let i = 0; i<nums.length; i++){
            newArr.push(nums[i])
        }
        return nums.concat(newArr)
    }
}
const sol = new Solution()
console.log(sol.getConcatenation([1,4,1,2]))