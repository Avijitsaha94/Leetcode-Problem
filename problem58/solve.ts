function lengthOfLastWord(s: string): number {
    let i: number = s.length - 1;   // string-এর একদম শেষ index থেকে শুরু করলাম

    while (i >= 0 && s[i] === ' ') {   // ধাপ ১: trailing spaces স্কিপ করছি
        i--;                              // বামদিকে এগোচ্ছি যতক্ষণ space পাচ্ছি
    }

    let length: number = 0;   // শেষ word-এর length count করার জন্য

    while (i >= 0 && s[i] !== ' ') {   // ধাপ ২: এখন actual word-এর character গুনছি
        length++;                         // প্রতিটা non-space character-এর জন্য length বাড়াচ্ছি
        i--;                               // বামদিকে এগোচ্ছি
    }

    return length;   // শেষ word-এর মোট length
};