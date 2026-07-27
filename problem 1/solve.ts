function removeElement(nums: number[], val: number): number {
    let k: number = 0;  // k = পরবর্তী "valid" element কোথায় বসবে তার position

    for (let i: number = 0; i < nums.length; i++) {   // i দিয়ে পুরো array scan করছি
        if (nums[i] !== val) {                        // যদি এই element val না হয়...
            nums[k] = nums[i];                        // ...তাহলে k position এ এটা বসিয়ে দিলাম
            k++;                                       // k কে এক বাড়ালাম, পরের valid element এর জন্য জায়গা তৈরি
        }
    }

    return k;   // k-ই হলো non-val elements এর সংখ্যা
};