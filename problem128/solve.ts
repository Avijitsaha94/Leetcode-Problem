function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;   // edge case: খালি array হলে কোনো sequence নাই

    const numSet: Set<number> = new Set(nums);   // O(1) lookup-এর জন্য সব number Set-এ রাখলাম
    let maxLength: number = 0;

    for (const num of numSet) {                    // প্রতিটা unique number দেখছি
        if (!numSet.has(num - 1)) {                   // যদি এটা কোনো sequence-এর "শুরু" হয় (num-1 নাই)...
            let currentNum: number = num;
            let currentLength: number = 1;

            while (numSet.has(currentNum + 1)) {         // যতক্ষণ পরের consecutive number পাওয়া যায়...
                currentNum++;                                // ...chain এগিয়ে নিয়ে যাই
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);   // এই chain-এর length দিয়ে maxLength আপডেট
        }
        // else: num-1 আছে, মানে num কোনো chain-এর মাঝে/শেষে — skip করলাম, redundant কাজ এড়ালাম
    }

    return maxLength;   // সবচেয়ে বড় consecutive sequence-এর length
};