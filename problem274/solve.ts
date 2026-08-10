function hIndex(citations: number[]): number {
    const n: number = citations.length;
    citations.sort((a, b) => a - b);   // ascending order-এ sort করলাম (ছোট থেকে বড়)

    for (let i: number = 0; i < n; i++) {         // প্রতিটা position scan করব বামদিক থেকে
        const papersFromHere: number = n - i;       // এই position থেকে শেষ পর্যন্ত মোট কয়টা paper আছে (এই সবগুলার citation >= citations[i])

        if (citations[i] >= papersFromHere) {        // যদি এই paper-এর citation, বাকি থাকা paper সংখ্যার চেয়ে বেশি বা সমান হয়...
            return papersFromHere;                     // ...তাহলে এই মুহূর্তেই আমরা h-index পেয়ে গেছি
        }
    }

    return 0;   // কোনো valid h না পেলে (সব citation 0), h-index হবে 0
};