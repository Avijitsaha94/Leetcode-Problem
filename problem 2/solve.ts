function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;   // edge case: empty array হলে unique element নাই

    let k: number = 1;   // প্রথম element সবসময়ই unique (তুলনা করার কিছু নাই), তাই k=1 থেকে শুরু

    for (let i: number = 1; i < nums.length; i++) {   // index 1 থেকে scan শুরু, কারণ index 0 আগে থেকেই "রাখা" ধরে নিলাম
        if (nums[i] !== nums[k - 1]) {                // current element কি শেষ "রাখা" unique element থেকে ভিন্ন?
            nums[k] = nums[i];                        // হ্যাঁ হলে, এটা নতুন unique value — k position এ বসাও
            k++;                                       // পরের slot এর জন্য k বাড়াও
        }
        // else: duplicate, কিছুই করব না, শুধু i বাড়বে (skip)
    }

    return k;   // k = মোট unique elements এর সংখ্যা
};