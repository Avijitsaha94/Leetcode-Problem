function isHappy(n: number): boolean {
    const seen: Set<number> = new Set();   // এখন পর্যন্ত দেখা number গুলো track করার জন্য

    const getNextNumber = (num: number): number => {   // digit-গুলোর বর্গের যোগফল বের করার helper
        let sum: number = 0;
        while (num > 0) {
            const digit: number = num % 10;               // শেষ digit বের করলাম
            sum += digit * digit;                            // তার বর্গ যোগ করলাম
            num = Math.floor(num / 10);                      // শেষ digit বাদ দিলাম (পরের digit-এর জন্য)
        }
        return sum;
    };

    while (n !== 1 && !seen.has(n)) {        // যতক্ষণ 1 না পাই, এবং cycle-এ না পড়ি
        seen.add(n);                            // current number "দেখা হয়েছে" মার্ক করলাম
        n = getNextNumber(n);                   // পরের number বের করলাম
    }

    return n === 1;   // যদি 1-এ পৌঁছে থেমে থাকি, happy; নাহলে (cycle-এর কারণে থামলে) not happy
};