class Solution {
    /**
     * Given an array of integers nums and an integer target,
     * return indices of the two numbers such that:
     * nums[i] + nums[j] == target and i != j
     * 
     * You may assume exactly one solution exists.
     * Return answer with smaller index first.
     */

    twoSum(nums, target) { 
        let map = {}; 

        for(let i = 0; i < nums.length; i++){
            let needed = target - nums[i]; 

            if(map[needed] !== undefined){
                return [map[needed], i];
            }

            map[nums[i]] = i;
        }
    }
}

const sol = new Solution();
console.log(sol.twoSum([3,4,5,6], 9)); // [1, 2]

/*
==================== EXPLANATION ====================

Input:
nums = [3,4,5,6]
target = 9

Step 1:
map = {}
(empty object jahan hum number -> index store karte hain)

----------------------------------------------------

Iteration 1:
i = 0
nums[i] = 3

needed = 9 - 3 = 6
Check: kya 6 map mein hai? ❌ nahi

Store:
map = { 3: 0 }

----------------------------------------------------

Iteration 2:
i = 1
nums[i] = 4

needed = 9 - 4 = 5
Check: kya 5 map mein hai? ❌ nahi

Store:
map = { 3: 0, 4: 1 }

----------------------------------------------------

Iteration 3:
i = 2
nums[i] = 5

needed = 9 - 5 = 4
Check: kya 4 map mein hai? ✅ haan

map[4] = 1

Return:
[1, 2]

----------------------------------------------------

FINAL OUTPUT:
[1, 2]

----------------------------------------------------

LOGIC:
1. Har number ke liye:
   needed = target - current number

2. Check:
   agar needed pehle mil gaya → answer mil gaya

3. Agar nahi:
   current number ko map mein store karo

----------------------------------------------------

SHORT TRICK:
"Find complement → check → store"

====================================================
*/