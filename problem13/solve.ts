function romanToInt(s: string): number {
    const values: Map<string, number> = new Map([   // Roman symbol -> integer value mapping
        ['I', 1], ['V', 5], ['X', 10],
        ['L', 50], ['C', 100],
        ['D', 500], ['M', 1000]
    ]);

    let total: number = 0;   // চূড়ান্ত ফলাফল রাখার জন্য

    for (let i: number = 0; i < s.length; i++) {
        const current: number = values.get(s[i])!;   // current character-এর value

        if (i + 1 < s.length && current < values.get(s[i + 1])!) {   // যদি পরের character থাকে এবং current তার চেয়ে ছোট হয়...
            total -= current;                                          // ...তাহলে বিয়োগ (subtractive case)
        } else {
            total += current;                                          // নাহলে সাধারণ নিয়মে যোগ
        }
    }

    return total;   // চূড়ান্ত integer value
};