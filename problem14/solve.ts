function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';   // edge case: খালি array হলে prefix নাই

    const firstString: string = strs[0];   // প্রথম string-কে reference হিসেবে ধরলাম

    for (let i: number = 0; i < firstString.length; i++) {   // প্রথম string-এর প্রতিটা character position ঘুরে দেখব
        const char: string = firstString[i];                    // এই position-এর character

        for (let j: number = 1; j < strs.length; j++) {           // বাকি সব string-এর সাথে তুলনা করব
            if (i >= strs[j].length || strs[j][i] !== char) {       // যদি ওই string ছোট (শেষ হয়ে গেছে) বা character না মেলে...
                return firstString.substring(0, i);                   // ...তাহলে এই পর্যন্তই common prefix, রিটার্ন করি
            }
        }
    }

    return firstString;   // যদি পুরো প্রথম string-ই সবার সাথে মিলে যায়, সেটাই সম্পূর্ণ prefix
};