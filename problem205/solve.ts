function isIsomorphic(s: string, t: string): boolean {
    const mapST: Map<string, string> = new Map();   // s এর character -> t এর character
    const mapTS: Map<string, string> = new Map();   // t এর character -> s এর character

    for (let i: number = 0; i < s.length; i++) {
        const sChar: string = s[i];
        const tChar: string = t[i];

        if (mapST.has(sChar)) {                        // যদি sChar আগে mapping করা থাকে...
            if (mapST.get(sChar) !== tChar) {              // ...তার mapped value বর্তমান tChar এর সমান কিনা চেক
                return false;                                 // না মিললে inconsistent, invalid
            }
        } else {
            mapST.set(sChar, tChar);                       // নতুন mapping তৈরি করলাম (s->t দিকে)
        }

        if (mapTS.has(tChar)) {                        // যদি tChar আগে mapping করা থাকে (উল্টো দিকে)...
            if (mapTS.get(tChar) !== sChar) {              // ...তার mapped value বর্তমান sChar এর সমান কিনা চেক
                return false;                                 // না মিললে inconsistent, invalid
            }
        } else {
            mapTS.set(tChar, sChar);                       // নতুন mapping তৈরি করলাম (t->s দিকে)
        }
    }

    return true;   // সব position-এ উভয় দিকের mapping সঙ্গতিপূর্ণ ছিল
};