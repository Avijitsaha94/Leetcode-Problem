class RandomizedSet {
    private data: number[];              // সব elements রাখার array, getRandom-এর জন্য দরকার
    private indexMap: Map<number, number>;  // value -> array-এর index, fast lookup-এর জন্য দরকার

    constructor() {
        this.data = [];                    // শুরুতে খালি array
        this.indexMap = new Map();         // শুরুতে খালি map
    }

    insert(val: number): boolean {
        if (this.indexMap.has(val)) {       // যদি value আগে থেকেই থাকে...
            return false;                     // ...তাহলে insert সম্ভব না, false return
        }

        this.data.push(val);                // array-এর শেষে value যোগ করলাম
        this.indexMap.set(val, this.data.length - 1);   // HashMap-এ note করলাম, এই value কোন index-এ আছে

        return true;                         // successfully insert হলো
    }

    remove(val: number): boolean {
        if (!this.indexMap.has(val)) {      // যদি value না থাকে...
            return false;                     // ...remove সম্ভব না, false return
        }

        const indexToRemove: number = this.indexMap.get(val)!;   // যেই value remove করব, তার array-index বের করলাম
        const lastElement: number = this.data[this.data.length - 1];   // array-এর শেষ element টা নিলাম

        this.data[indexToRemove] = lastElement;          // শেষ element-টাকে remove হওয়া value-এর জায়গায় বসিয়ে দিলাম (swap)
        this.indexMap.set(lastElement, indexToRemove);   // HashMap-এও আপডেট করলাম, lastElement-এর নতুন index

        this.data.pop();                    // array-এর শেষ থেকে (এখন duplicate হয়ে যাওয়া) element সরিয়ে দিলাম
        this.indexMap.delete(val);          // HashMap থেকেও remove হওয়া value-এর entry মুছে দিলাম

        return true;                         // successfully remove হলো
    }

    getRandom(): number {
        const randomIndex: number = Math.floor(Math.random() * this.data.length);   // 0 থেকে (length-1) এর মধ্যে random index
        return this.data[randomIndex];        // সেই index-এর value সরাসরি return (O(1) array access)
    }
}