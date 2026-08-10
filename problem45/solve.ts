function jump(nums: number[]): number {
    let jumps: number = 0;         // এখন পর্যন্ত কয়টা jump নেওয়া হয়েছে
    let currentEnd: number = 0;    // current jump-level এর সীমানা (এখানে পৌঁছাতে jumps সংখ্যাই যথেষ্ট)
    let farthest: number = 0;      // current level এর মধ্যে থেকে পরের jump এ সর্বোচ্চ কতদূর যাওয়া যায়

    for (let i: number = 0; i < nums.length - 1; i++) {   // শেষ index পর্যন্ত পৌঁছানোই লক্ষ্য, তাই শেষ index থেকে jump নেওয়ার দরকার নাই
        farthest = Math.max(farthest, i + nums[i]);          // এই position থেকে কতদূর যাওয়া যায়, তা দিয়ে farthest আপডেট

        if (i === currentEnd) {                               // current level এর শেষ position এ পৌঁছে গেছি
            jumps++;                                            // তাই একটা নতুন jump নিতেই হবে
            currentEnd = farthest;                              // পরের level এর নতুন সীমানা সেট হলো
        }
    }

    return jumps;   // মোট কয়টা jump লেগেছে
};