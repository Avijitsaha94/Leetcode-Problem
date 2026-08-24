function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0;                    // window-এর বাম সীমানা
    let currentSum: number = 0;               // এখন পর্যন্ত window-এর ভেতরের যোগফল
    let minLength: number = Infinity;         // এখন পর্যন্ত সবচেয়ে ছোট valid window-এর length

    for (let right: number = 0; right < nums.length; right++) {   // right pointer দিয়ে window বড় করতে থাকি
        currentSum += nums[right];                                    // নতুন element window-এ যোগ করলাম

        while (currentSum >= target) {                                // যতক্ষণ window-এর sum যথেষ্ট (target পূরণ)...
            minLength = Math.min(minLength, right - left + 1);            // ...এই window-এর length তুলনা করে minLength আপডেট
            currentSum -= nums[left];                                      // বামদিকের element বাদ দিলাম (window ছোট করার চেষ্টা)
            left++;                                                         // বাম সীমানা এক ঘর সরালাম
        }
    }

    return minLength === Infinity ? 0 : minLength;   // যদি কোনো valid window-ই না পাওয়া যায়, 0 রিটার্ন করি
};