function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    const answer: number[] = new Array(n).fill(1);   // output array, শুরুতে সব 1 (identity for multiplication)

    // Step 1: বামদিক থেকে scan করে, প্রতিটা position-এ তার "আগের সব"-এর product বসাই
    let leftProduct: number = 1;                       // এখন পর্যন্ত বামদিকের product, শুরুতে 1 (কিছুই নাই আগে)
    for (let i: number = 0; i < n; i++) {
        answer[i] = leftProduct;                        // এই position-এর জন্য "আগের সব"-এর product বসালাম
        leftProduct *= nums[i];                          // এখন current element যোগ করে leftProduct আপডেট (পরের position-এর জন্য)
    }

    // Step 2: ডানদিক থেকে scan করে, প্রতিটা position-এর সাথে "পরের সব"-এর product গুণ করি
    let rightProduct: number = 1;                       // এখন পর্যন্ত ডানদিকের product, শুরুতে 1
    for (let i: number = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;                       // আগে থেকে থাকা leftProduct-এর সাথে rightProduct গুণ করলাম
        rightProduct *= nums[i];                          // current element যোগ করে rightProduct আপডেট (পরের position-এর জন্য)
    }

    return answer;   // প্রতিটা position-এ এখন "leftProduct × rightProduct" বসানো আছে
};