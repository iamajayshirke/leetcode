function strStr(haystack: string, needle: string): number {
    let h = haystack.length
    let n = needle.length
    let lps: number[] = [0]
    let i = 0
    let j = 1
    // Build LPS Array
    while(j < n){
        if(needle[i] == needle[j]){
            lps[j] = i+1
            i+=1
            j+=1
        }else{
            if(i == 0){
                lps[j] = 0
                j+=1
            }else{
                i = lps[i - 1]
            }
        }
    }
    console.log(lps,"LPS Array")
    i = j = 0
    //Compare Needle with HayStack
    while(j < h){
        //If needle is equals to haystack
        if(needle[i] == haystack[j]){
            ++i
            ++j
        }else{
            if(i == 0){
                j++
            }else{
                i = lps[i-1]
            }
        }
        if(i == n){
            return j - n
        }
    }
    return -1
};