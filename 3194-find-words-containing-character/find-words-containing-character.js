/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res = []
    for(let i = 0;i<words.length;i++){
        console.log(words[i])
        if(words[i].includes(x)){
             res.push(i)
        }
    }
    return res
};