function maxArea(height: number[]): number {
    let left: number = 0;                     // বাম pointer, শুরুতে array-এর শুরুতে
    let right: number = height.length - 1;    // ডান pointer, শুরুতে array-এর শেষে

    let maxWater: number = 0;                  // এখন পর্যন্ত সর্বোচ্চ পানি ধরে রাখা সম্ভব হয়েছে

    while (left < right) {                      // দুই pointer মাঝে না মেলা পর্যন্ত চলবে
        const width: number = right - left;                        // দুই line-এর মধ্যেকার দূরত্ব
        const containerHeight: number = Math.min(height[left], height[right]);   // ছোট line-ই বাধা নির্ধারণ করে
        const currentArea: number = width * containerHeight;         // বর্তমান container-এর area

        maxWater = Math.max(maxWater, currentArea);   // এখন পর্যন্ত সর্বোচ্চ area-এর সাথে তুলনা করে আপডেট

        if (height[left] < height[right]) {           // যদি বামদিকের line ছোট হয়...
            left++;                                       // ...তাহলে বামদিকেরটাই move করি (বড়টা রেখে দিই)
        } else {                                       // নাহলে (ডানদিকেরটা ছোট বা সমান)...
            right--;                                       // ...ডানদিকেরটা move করি
        }
    }

    return maxWater;   // সর্বোচ্চ পানি ধরে রাখা সম্ভব এমন area
};