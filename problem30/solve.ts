function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    if (words.length === 0 || s.length === 0) return result;

    const wordLen: number = words[0].length;           // প্রতিটা word-এর length (সবগুলো সমান)
    const numWords: number = words.length;              // মোট কয়টা word আছে
    const totalLen: number = wordLen * numWords;        // পুরো concatenation-এর মোট length

    if (s.length < totalLen) return result;             // s যথেষ্ট বড় না হলে, কোনো answer সম্ভব না

    const wordCount: Map<string, number> = new Map();   // words array-এর frequency map
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    for (let offset: number = 0; offset < wordLen; offset++) {   // প্রতিটা offset group-এর জন্য আলাদাভাবে sliding window
        let left: number = offset;                                  // এই offset-এ window শুরু হচ্ছে
        let count: number = 0;                                      // window-এ বর্তমানে কয়টা valid word আছে
        const windowCount: Map<string, number> = new Map();         // window-এর ভেতরের word-এর frequency

        for (let right: number = offset; right + wordLen <= s.length; right += wordLen) {   // wordLen করে জাম্প করে ডানে scan
            const word: string = s.substring(right, right + wordLen);   // current word-chunk বের করলাম

            if (wordCount.has(word)) {                                  // যদি এই word words array-তে থাকে (valid word)...
                windowCount.set(word, (windowCount.get(word) || 0) + 1);   // window-এ এর frequency বাড়ালাম
                count++;                                                     // window-এ মোট word সংখ্যা বাড়ালাম

                while (windowCount.get(word)! > wordCount.get(word)!) {     // যদি এই word-এর frequency দরকারের চেয়ে বেশি হয়ে যায়...
                    const leftWord: string = s.substring(left, left + wordLen);   // বামদিকের word বের করলাম
                    windowCount.set(leftWord, windowCount.get(leftWord)! - 1);      // window থেকে সেটা বাদ দিলাম
                    count--;
                    left += wordLen;                                                // window-এর বাম সীমানা এক word এগোলাম
                }

                if (count === numWords) {                                    // যদি window-এ ঠিক সব word (সঠিক frequency-তে) থাকে...
                    result.push(left);                                          // ...তাহলে এই left position একটা valid answer
                    // এই position-এর leftmost word বাদ দিয়ে window এক ধাপ এগিয়ে নিলাম (পরের সম্ভাব্য window-এর জন্য)
                    const leftWord: string = s.substring(left, left + wordLen);
                    windowCount.set(leftWord, windowCount.get(leftWord)! - 1);
                    count--;
                    left += wordLen;
                }
            } else {                                                      // যদি এই word words array-তে না থাকে (invalid word)...
                windowCount.clear();                                          // পুরো window reset করলাম
                count = 0;
                left = right + wordLen;                                       // window শুরু হবে এই invalid word-এর ঠিক পরে
            }
        }
    }

    return result;   // সব valid starting index
};