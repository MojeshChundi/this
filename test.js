const nextPermutation=(nums)=>{
let i=nums.length-2;
while(i>=0 && nums[i]>=nums[i+1]){
  i--;
}
if(i>=0){
let j=nums.length-1;
while(j>=0 && nums[j]<=nums[i] ) j--;
swap(nums,i,j)
Reversed(nums,i+1);
}
function swap(nums,i,j){
  let temp=nums[i];
  nums[i]=nums[j];
  nums[j]=temp;
}
function Reversed(nums,start){
  let end=nums.length-1;
  while(start<end){
    swap(nums,start,end)
    start++;
    end--;
  }
}
return nums;
}
let nums=[1,1,5,4,1];
console.log(nextPermutation(nums))