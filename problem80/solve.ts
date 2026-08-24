function removeDuplicates(nums: number[]): number {
    const n: number = nums.length;
    if (n <= 2) return n;   // 2 বা তার কম element হলে duplicate limit (2) violate হওয়ার সুযোগই নাই

    let k: number = 2;   // প্রথম দুইটা element সবসময়ই রাখা যায় (তুলনা করার জন্য k-2 লাগবে বলে বেস কেস হিসেবে ধরে নিলাম)

    for (let i: number = 2; i < n; i++) {         // index 2 থেকে scan শুরু, কারণ 0,1 আগে থেকেই "রাখা" ধরে নিলাম
        if (nums[i] !== nums[k - 2]) {            // current element কি "রাখা অংশের" দুই ধাপ আগের element থেকে ভিন্ন?
            nums[k] = nums[i];                    // হ্যাঁ হলে, এটা এখনো ২ বার হয়নি — রাখা যায়
            k++;                                   // পরের slot এর জন্য k বাড়াও
        }
        // else: এই value ইতিমধ্যে ২ বার রাখা হয়ে গেছে, এইটা ৩য়/৪র্থ বার — skip
    }

    return k;   // k = final valid length
};