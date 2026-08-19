function isSubsequence(s: string, t: string): boolean {
    let sPointer: number = 0;   // s এর মধ্যে এখন কোন character খুঁজছি
    let tPointer: number = 0;   // t এর মধ্যে কোথায় আছি

    while (tPointer < t.length && sPointer < s.length) {   // যতক্ষণ দুইটার কোনোটাই শেষ না হয়
        if (s[sPointer] === t[tPointer]) {                    // যদি match হয়ে যায়...
            sPointer++;                                          // ...তাহলে s এর পরের character খুঁজতে এগোলাম
        }
        tPointer++;                                           // t সবসময় এগোবে, match হোক বা না হোক
    }

    return sPointer === s.length;   // যদি s এর সবগুলো character খুঁজে পাওয়া গেছে (pointer শেষ পর্যন্ত পৌঁছেছে), তাহলে true
};