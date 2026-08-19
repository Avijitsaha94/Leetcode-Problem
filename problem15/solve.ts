function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];       // চূড়ান্ত unique triplet-গুলো রাখার জন্য
    nums.sort((a, b) => a - b);          // array-টা প্রথমে ascending order-এ sort করে নিলাম

    const n: number = nums.length;

    for (let i: number = 0; i < n - 2; i++) {   // প্রথম element হিসেবে fix করার জন্য scan
        if (nums[i] > 0) break;                    // যদি sorted array-তে প্রথম element-ই positive হয়ে যায়, বাকি সব positive হবে, sum কখনো 0 হবে না — early exit

        if (i > 0 && nums[i] === nums[i - 1]) {     // duplicate fixed element skip করছি
            continue;
        }

        let left: number = i + 1;    // fixed element-এর ঠিক পরের position থেকে বাম pointer
        let right: number = n - 1;   // array-এর শেষ থেকে ডান pointer

        while (left < right) {
            const sum: number = nums[i] + nums[left] + nums[right];   // তিনটার যোগফল

            if (sum === 0) {                                // যদি triplet পাওয়া যায়...
                result.push([nums[i], nums[left], nums[right]]);   // ...রেজাল্টে যোগ করি

                while (left < right && nums[left] === nums[left + 1]) {   // duplicate left value skip
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {  // duplicate right value skip
                    right--;
                }

                left++;    // এবার আসল pointer move (পরের ভিন্ন value-তে যাওয়ার জন্য)
                right--;
            } else if (sum < 0) {                            // যোগফল কম হলে...
                left++;                                          // ...বামদিকে বড় value নিতে এগোই
            } else {                                           // যোগফল বেশি হলে...
                right--;                                          // ...ডানদিকে ছোট value নিতে পিছাই
            }
        }
    }

    return result;   // সব unique triplet
};