/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0 || intervals.length === 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    let begin = intervals[0][0]; // 2
    let end = intervals[0][1];  // 3

    let res = []; // [[2, 3]]

    for (let i = 1; i < intervals.length; i++) {
        let currentBegin = intervals[i][0]; // 2
        let currentEnd = intervals[i][1]; // 2
        if (currentBegin <= end) { // 2 <= 3  3<=2
            end = Math.max(end, currentEnd); //
        } else {
            res.push([begin, end]);
            begin = currentBegin;
            end = currentEnd;
        }
    }

    res.push([begin, end])

    return res;
};