function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;   // magazine ছোট হলে, যথেষ্ট অক্ষর থাকার সম্ভাবনাই নাই

    const charCount: Map<string, number> = new Map();   // magazine-এর character frequency রাখার জন্য

    for (const char of magazine) {                          // magazine-এর প্রতিটা character গুনে রাখলাম
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {                        // ransomNote-এর প্রতিটা character চেক করছি
        const count: number = charCount.get(char) || 0;

        if (count === 0) {                                     // যথেষ্ট অক্ষর নাই (বা একেবারেই নাই)...
            return false;                                         // ...তাহলে বানানো সম্ভব না
        }

        charCount.set(char, count - 1);                        // এই character "ব্যবহার" হয়ে গেল, count কমালাম
    }

    return true;   // সব character সফলভাবে পাওয়া গেছে
};