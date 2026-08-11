function candy(ratings: number[]): number {
    const n: number = ratings.length;
    const candies: number[] = new Array(n).fill(1);   // প্রতিটা বাচ্চা শুরুতে কমপক্ষে ১টা candy পাবে (baseline)

    // Pass 1: বামদিক থেকে ডানদিকে — শুধু "বামদিকের প্রতিবেশীর চেয়ে বেশি rating হলে বেশি candy" শর্ত handle করছি
    for (let i: number = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {              // যদি current rating আগেরটার চেয়ে বেশি হয়...
            candies[i] = candies[i - 1] + 1;               // ...তাহলে candy আগেরটার চেয়ে বেশি দিলাম
        }
    }

    // Pass 2: ডানদিক থেকে বামদিকে — শুধু "ডানদিকের প্রতিবেশীর চেয়ে বেশি rating হলে বেশি candy" শর্ত handle করছি
    for (let i: number = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {              // যদি current rating পরেরটার চেয়ে বেশি হয়...
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);   // দুই শর্তই satisfy রাখতে max নিলাম (আগের pass-এর মান বনাম নতুন প্রয়োজন)
        }
    }

    let totalCandies: number = 0;                       // সব candy যোগ করার জন্য
    for (let i: number = 0; i < n; i++) {
        totalCandies += candies[i];                        // প্রতিটা বাচ্চার candy যোগ করলাম
    }

    return totalCandies;   // মোট minimum candy সংখ্যা
};