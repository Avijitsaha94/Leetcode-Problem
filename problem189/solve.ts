function rotate(nums: number[], k: number): void {
    const n: number = nums.length;
    k = k % n;                       // k normalize করলাম

    reverseSegment(nums, 0, n - 1);  // ধাপ ১: পুরো array reverse
    reverseSegment(nums, 0, k - 1);  // ধাপ ২: প্রথম k element reverse
    reverseSegment(nums, k, n - 1);  // ধাপ ৩: বাকি n-k element reverse
};

function reverseSegment(nums: number[], start: number, end: number): void {
    while (start < end) {              // দুই প্রান্ত থেকে মাঝে আসতে থাকব
        const temp: number = nums[start];
        nums[start] = nums[end];       // start আর end এর value swap
        nums[end] = temp;
        start++;                        // ভিতরের দিকে এগোলাম
        end--;
    }
}