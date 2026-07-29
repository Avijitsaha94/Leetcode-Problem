function majorityElement(nums: number[]): number {
    let candidate: number = nums[0];   // প্রথম element কে initial candidate ধরে নিলাম
    let count: number = 0;             // vote counter শুরু 0 দিয়ে

    for (let i: number = 0; i < nums.length; i++) {
        if (count === 0) {              // যদি counter শূন্যে নেমে যায়...
            candidate = nums[i];         // ...নতুন candidate বেছে নাও (current element)
        }

        if (nums[i] === candidate) {    // current element কি candidate এর সমান?
            count++;                     // হ্যাঁ হলে vote বাড়াও (+1)
        } else {
            count--;                     // না হলে vote কমাও (-1, cancel out)
        }
    }

    return candidate;   // শেষমেশ যে candidate টিকে থাকবে সেটাই majority element
};