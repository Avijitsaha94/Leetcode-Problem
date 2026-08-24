function lengthOfLongestSubstring(s: string): number {
    const lastSeen: Map<string, number> = new Map();   // character -> তার সর্বশেষ দেখা index
    let left: number = 0;                                 // window-এর বাম সীমানা
    let maxLength: number = 0;                             // এখন পর্যন্ত সবচেয়ে বড় unique substring-এর length

    for (let right: number = 0; right < s.length; right++) {   // right pointer দিয়ে string scan করছি
        const char: string = s[right];

        if (lastSeen.has(char) && lastSeen.get(char)! >= left) {   // যদি এই character আগে দেখা গেছে, এবং সেটা current window-এর ভিতরেই...
            left = lastSeen.get(char)! + 1;                           // ...তাহলে left-কে সেই duplicate-এর ঠিক পরের position-এ নিয়ে যাই
        }

        lastSeen.set(char, right);                                 // এই character-এর সর্বশেষ position আপডেট করলাম

        maxLength = Math.max(maxLength, right - left + 1);         // বর্তমান window-এর length দিয়ে maxLength আপডেট
    }

    return maxLength;   // সবচেয়ে বড় unique-character substring-এর length
};