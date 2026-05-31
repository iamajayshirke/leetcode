function strStr(haystack: string, needle: string): number {
    let need = 0
    for(let i = 0;i<haystack.length;i++){
        if(haystack[i] == needle[need]){
            need+=1
            if(need === needle.length){
                return i+1 - need
            }
        }else{
            i = i - need;
            need=0
        }
    }
    return -1
};