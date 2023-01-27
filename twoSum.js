var twoSum = function(nums, target) {
    for(let i=0;i<nums.length; i++){
        const diff = target - nums[i]
        
        const diffIndex = nums.indexOf(diff)
        
        if(diffIndex !== -1 && diffIndex !== i){
            return [nums[i], nums[diffIndex]]
        }
    }
}

console.log(twoSum([3,2,4],6))
