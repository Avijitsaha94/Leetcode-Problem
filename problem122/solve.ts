function maxProfit(prices: number[]): number {
    let totalProfit: number = 0;   // মোট profit রাখার জন্য, শুরুতে 0

    for (let i: number = 1; i < prices.length; i++) {   // দ্বিতীয় দিন থেকে scan শুরু (আগের দিনের সাথে compare করব)
        if (prices[i] > prices[i - 1]) {                  // যদি আজকের দাম গতকালের চেয়ে বেশি হয় (upward move)...
            totalProfit += prices[i] - prices[i - 1];      // ...তাহলে এই ছোট্ট লাভটা মোট profit-এ যোগ করে দাও
        }
        // else: দাম কমেছে বা সমান আছে — কিছু করার নাই, skip
    }

    return totalProfit;   // সব upward move-এর যোগফলই হলো maximum total profit
};