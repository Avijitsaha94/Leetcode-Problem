function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const lastIndex: Map<number, number> = new Map();   // value -> তার সবচেয়ে সাম্প্রতিক index

    for (let i: number = 0; i < nums.length; i++) {
        const value: number = nums[i];

        if (lastIndex.has(value)) {                        // যদি এই value আগে দেখা গিয়ে থাকে...
            const previousIndex: number = lastIndex.get(value)!;
            if (i - previousIndex <= k) {                      // ...এবং দূরত্ব k এর মধ্যে হয়...
                return true;                                       // ...তাহলে শর্ত পূরণ, সাথে সাথেই true
            }
        }

        lastIndex.set(value, i);                           // এই value-এর সবচেয়ে সাম্প্রতিক index আপডেট করলাম
    }

    return false;   // পুরো array scan শেষ, কোনো valid pair পাওয়া যায়নি
};