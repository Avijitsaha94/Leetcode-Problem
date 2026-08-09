function canJump(nums: number[]): boolean {
    let maxReach: number = 0;   // এখন পর্যন্ত সর্বোচ্চ কোন index পর্যন্ত পৌঁছানো সম্ভব, শুরুতে 0 (নিজের position)

    for (let i: number = 0; i < nums.length; i++) {   // প্রতিটা position ঘুরে দেখব
        if (i > maxReach) {                             // যদি এই position-এ পৌঁছানোই সম্ভব না হয়...
            return false;                                 // ...তাহলে শেষ পর্যন্ত পৌঁছানোও অসম্ভব, সাথে সাথে false
        }

        maxReach = Math.max(maxReach, i + nums[i]);     // এই position থেকে কতদূর যাওয়া যায়, সেটা দিয়ে maxReach আপডেট

        if (maxReach >= nums.length - 1) {               // যদি শেষ index পর্যন্ত পৌঁছানো ইতিমধ্যেই সম্ভব হয়ে যায়...
            return true;                                  // ...তাহলে সাথে সাথে true (আর check করার দরকার নাই)
        }
    }

    return true;   // loop শেষে এখানে পৌঁছালে মানে সবসময়ই safely এগিয়েছি
};