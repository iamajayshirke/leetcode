function sortColors(colors: number[]): number[] {
let left = 0
let mid = 0
let right = colors.length-1
while(mid <= right){
    if(colors[mid] === 0){
           [colors[left],colors[mid]] = [colors[mid],colors[left]]
            left++
            mid++
       }else if(colors[mid] === 1){
            mid++
        }else if(colors[mid] === 2){
            [colors[mid],colors[right]] = [colors[right],colors[mid]]
            right--
        }
}
return colors
};