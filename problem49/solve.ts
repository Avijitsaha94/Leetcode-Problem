function groupAnagrams(strs: string[]): string[][] {
    const groups: Map<string, string[]> = new Map();   // signature -> সেই signature-এর সব string

    for (const str of strs) {
        const signature: string = str.split('').sort().join('');   // string-টাকে sort করে canonical signature বানালাম

        if (!groups.has(signature)) {
            groups.set(signature, []);                                 // এই signature প্রথমবার দেখা যাচ্ছে, নতুন group তৈরি
        }

        groups.get(signature)!.push(str);                            // এই string-কে তার signature-এর group-এ যোগ করলাম
    }

    return Array.from(groups.values());   // সব group (value গুলো) নিয়ে final result বানালাম
};