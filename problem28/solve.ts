function strStr(haystack: string, needle: string): number {
    const n: number = haystack.length;
    const m: number = needle.length;

    for (let i: number = 0; i <= n - m; i++) {   // i সর্বোচ্চ এতদূর যেতে পারবে যাতে needle-এর জন্য জায়গা থাকে
        let match: boolean = true;                  // ধরে নিলাম এই position থেকে মিলবে

        for (let j: number = 0; j < m; j++) {         // needle-এর প্রতিটা character একে একে চেক করছি
            if (haystack[i + j] !== needle[j]) {         // যদি কোনো position-এ mismatch হয়...
                match = false;                              // ...তাহলে এই starting position invalid
                break;                                      // আর চেক করার দরকার নাই, এই position বাদ
            }
        }

        if (match) {                                 // যদি পুরো needle মিলে যায়...
            return i;                                   // ...তাহলে এটাই প্রথম occurrence, তার index return
        }
    }

    return -1;   // কোথাও না মিললে, needle haystack-এ নাই
};