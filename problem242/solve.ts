function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;   // length ভিন্ন হলে anagram হওয়া অসম্ভব

    const charCount: number[] = new Array(26).fill(0);   // 'a' থেকে 'z' এর জন্য frequency counter

    for (let i: number = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 97]++;   // s এর character এর জন্য counter বাড়ালাম
        charCount[t.charCodeAt(i) - 97]--;   // t এর একই position এর character এর জন্য counter কমালাম
    }

    for (const count of charCount) {           // সব counter 0 কিনা চেক করছি
        if (count !== 0) {
            return false;                         // কোনো একটা 0 না হলে, frequency mismatch আছে
        }
    }

    return true;   // সব counter 0, মানে s আর t এর প্রতিটা character এর frequency হুবহু সমান
};