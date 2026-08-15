function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;   // edge case: ১ row হলে zigzag-এর কোনো মানে নাই, string অপরিবর্তিত থাকবে

    const rows: string[] = new Array(numRows).fill('');   // প্রতিটা row-এর জন্য আলাদা string bucket

    let currentRow: number = 0;    // এখন কোন row-এ character বসছে
    let direction: number = -1;    // movement direction: শুরুতে -1 রাখলাম, কারণ প্রথম character-এই +1 হয়ে row 0 এ ঠিক থাকবে (নিচে ব্যাখ্যা দেখো)

    for (const char of s) {                          // string-এর প্রতিটা character একটা একটা করে scan করছি
        rows[currentRow] += char;                       // current row-এর bucket-এ এই character যোগ করলাম

        if (currentRow === 0 || currentRow === numRows - 1) {   // যদি প্রথম বা শেষ row-এ পৌঁছে যাই...
            direction = -direction;                                // ...তাহলে direction উল্টে দিলাম (bounce)
        }

        currentRow += direction;                          // পরের character-এর জন্য row আপডেট করলাম
    }

    return rows.join('');   // সব row-এর bucket জোড়া লাগিয়ে ফাইনাল answer বানালাম
};