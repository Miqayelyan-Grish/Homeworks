var singleNumber = function(nums) {
    
    let size = nums.length; 

    let res = 0;

    for(let i = 0; i < size; ++i){
       
        if(nums.length == 1){
            return nums[0];
        } 
        res ^= nums[i]; 
        }
    return res;
};

const nums = [4,1,2,1,2];

console.log(singleNumber(nums));