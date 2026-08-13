function trap(height: number[]): number {
    let left: number = 0;                    // বাম pointer, শুরুতে array-এর শুরুতে
    let right: number = height.length - 1;   // ডান pointer, শুরুতে array-এর শেষে

    let leftMax: number = 0;                 // এখন পর্যন্ত বামদিকে দেখা সর্বোচ্চ height
    let rightMax: number = 0;                // এখন পর্যন্ত ডানদিকে দেখা সর্বোচ্চ height

    let totalWater: number = 0;              // মোট জমা পানি

    while (left < right) {                   // দুই pointer মাঝে না মেলা পর্যন্ত চলবে
        if (height[left] < height[right]) {    // বামদিকের height ছোট হলে, বামদিক নিয়ে কাজ করব
            leftMax = Math.max(leftMax, height[left]);   // leftMax আপডেট
            totalWater += leftMax - height[left];          // এই position-এ জমা পানি যোগ (leftMax-ই bottleneck, নিশ্চিত)
            left++;                                         // বাম pointer এগোলাম
        } else {                                // নাহলে (ডানদিকের height ছোট বা সমান), ডানদিক নিয়ে কাজ করব
            rightMax = Math.max(rightMax, height[right]); // rightMax আপডেট
            totalWater += rightMax - height[right];         // এই position-এ জমা পানি যোগ (rightMax-ই bottleneck, নিশ্চিত)
            right--;                                        // ডান pointer পিছিয়ে আসলাম
        }
    }

    return totalWater;   // মোট জমা পানি
};