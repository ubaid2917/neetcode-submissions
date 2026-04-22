class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        return nums.concat(nums)
    }
}
const sol = new Solution()
console.log(sol.getConcatenation([1,2,3,4]))