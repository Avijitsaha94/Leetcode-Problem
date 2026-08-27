function twoSum(nums: number[], target: number): number[] {
    const seen: Map<number, number> = new Map();   // value -> তার index (এখন পর্যন্ত যা দেখা হয়েছে)

    for (let i: number = 0; i < nums.length; i++) {
        const complement: number = target - nums[i];   // এই element-এর জন্য কোন value দরকার (partner)

        if (seen.has(complement)) {                       // যদি সেই partner value আগেই দেখা গিয়ে থাকে...
            return [seen.get(complement)!, i];               // ...তাহলে আগের index আর current index-ই answer
        }

        seen.set(nums[i], i);                             // current value-কে map-এ যোগ করলাম, ভবিষ্যতের জন্য
    }

    return [];   // Problem guarantee করছে সমাধান থাকবেই, তাই এখানে পৌঁছানোর কথা না (defensive fallback)
};