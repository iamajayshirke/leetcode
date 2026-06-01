function intersect(nums1: number[], nums2: number[]): number[] {
    let left:number = 0
    let right:number = 0
    let intersected:number[] = []
    nums1.sort((a,b)=> a-b)
    nums2.sort((a,b)=> a-b)
    console.log(nums1, nums2)
    while(left < nums1.length && right < nums2.length){
        if(nums1[left] == nums2[right]){
            intersected.push(nums1[left])
            left+=1
            right+=1
        }else if(nums1[left] < nums2[right]){
                left+=1
        }else if(nums1[left] > nums2[right]){
                right+=1
        }
    }
    return intersected
};