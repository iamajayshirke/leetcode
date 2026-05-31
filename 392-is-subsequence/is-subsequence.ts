function isSubsequence(s: string, t: string): boolean {
    let sPointer = 0
    let tPointer = 0
    while(sPointer < s.length && tPointer < t.length){ //0
        if(s[sPointer] === t[tPointer]){ //x == c
            sPointer+=1                     //h
        }
        tPointer+=1                         //c
    }
    return sPointer === s.length;
};