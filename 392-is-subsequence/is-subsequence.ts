function isSubsequence(s: string, t: string): boolean {
    let fir = 0;

    if (s === t) return true

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[fir]) {
            fir++;
        }

        if (fir >= s.length) {
            return true;
        }
    }

    return false;
};