function maxProfit(prices: number[]): number {
    let minPrice: number = prices[0];   // এখন পর্যন্ত সবচেয়ে কম দাম (best buy point), শুরুতে প্রথম দিনের দাম
    let maxProfit: number = 0;          // এখন পর্যন্ত সবচেয়ে বেশি profit, শুরুতে 0

    for (let i: number = 1; i < prices.length; i++) {   // দ্বিতীয় দিন থেকে scan শুরু
        const todayProfit: number = prices[i] - minPrice;   // আজকে বেচলে কত profit হতো

        if (todayProfit > maxProfit) {                       // আগের best profit-এর চেয়ে বেশি হলে...
            maxProfit = todayProfit;                          // ...maxProfit আপডেট
        }

        if (prices[i] < minPrice) {                          // আজকের দাম সবচেয়ে কম দামের চেয়েও কম হলে...
            minPrice = prices[i];                             // ...minPrice আপডেট (নতুন best buy point)
        }
    }

    return maxProfit;   // সবশেষে সবচেয়ে বেশি profit ফেরত
};