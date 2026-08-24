function minWindow(s: string, t: string): string {
    if (s.length < t.length || t.length === 0) return '';   // edge case: t, s-এর চেয়ে বড় হলে অসম্ভব

    const need: Map<string, number> = new Map();   // t-এর প্রতিটা character কতবার লাগবে
    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    const requiredCount: number = need.size;   // কতগুলো distinct character-এর requirement পূরণ করতে হবে

    const windowCount: Map<string, number> = new Map();   // window-এর ভেতরের বর্তমান frequency
    let formedCount: number = 0;                             // এখন পর্যন্ত কয়টা requirement পুরোপুরি পূরণ হয়েছে

    let left: number = 0;
    let minLength: number = Infinity;    // এখন পর্যন্ত সবচেয়ে ছোট valid window-এর length
    let minStart: number = 0;            // সেই সবচেয়ে ছোট window-এর starting index

    for (let right: number = 0; right < s.length; right++) {   // right pointer দিয়ে window বড় করতে থাকি
        const rightChar: string = s[right];
        windowCount.set(rightChar, (windowCount.get(rightChar) || 0) + 1);   // window-এ এই character যোগ করলাম

        if (need.has(rightChar) && windowCount.get(rightChar) === need.get(rightChar)) {
            formedCount++;   // এই character-এর requirement ঠিক এখনই পূরণ হলো
        }

        while (formedCount === requiredCount) {   // যতক্ষণ সব requirement পূরণ (window fully valid)...
            if (right - left + 1 < minLength) {       // এই window যদি এখন পর্যন্ত সবচেয়ে ছোট হয়...
                minLength = right - left + 1;             // ...record করে রাখি
                minStart = left;
            }

            const leftChar: string = s[left];             // বামদিকের character বাদ দেওয়ার চেষ্টা করি (shrink)
            windowCount.set(leftChar, windowCount.get(leftChar)! - 1);

            if (need.has(leftChar) && windowCount.get(leftChar)! < need.get(leftChar)!) {
                formedCount--;   // এই character-এর requirement আর পূরণ নাই, window আর valid না
            }

            left++;   // window-এর বাম সীমানা এক ঘর সরালাম
        }
    }

    return minLength === Infinity ? '' : s.substring(minStart, minStart + minLength);
};