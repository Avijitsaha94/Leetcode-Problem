function canCompleteCircuit(gas: number[], cost: number[]): number {
    const n: number = gas.length;

    let totalTank: number = 0;    // পুরো circuit-এর জন্য মোট (gas - cost), সমাধান আদৌ সম্ভব কিনা যাচাই করতে
    let currentTank: number = 0;  // candidate start থেকে এখন পর্যন্ত running tank balance
    let startIndex: number = 0;   // এখন পর্যন্ত সম্ভাব্য candidate starting station

    for (let i: number = 0; i < n; i++) {
        const diff: number = gas[i] - cost[i];   // এই station-এ নেট gain/loss

        totalTank += diff;      // সামগ্রিক (পুরো circuit-এর) হিসাবে যোগ করলাম
        currentTank += diff;    // current candidate-এর জন্য running tank-এ যোগ করলাম

        if (currentTank < 0) {              // যদি এই candidate start থেকে tank negative হয়ে যায়...
            startIndex = i + 1;               // ...তাহলে পরের station-কে নতুন candidate বানালাম
            currentTank = 0;                  // এবং tank reset করে দিলাম (নতুন করে শুরু)
        }
    }

    return totalTank >= 0 ? startIndex : -1;   // মোট tank negative হলে সমাধান নাই, নাহলে যে candidate টিকে ছিল সেটাই answer
};