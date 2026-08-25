function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    if (matrix.length === 0) return result;

    let top: number = 0;                       // উপরের সীমানা (row)
    let bottom: number = matrix.length - 1;    // নিচের সীমানা (row)
    let left: number = 0;                       // বামের সীমানা (column)
    let right: number = matrix[0].length - 1;   // ডানের সীমানা (column)

    while (top <= bottom && left <= right) {     // যতক্ষণ একটা valid layer বাকি আছে

        for (let c: number = left; c <= right; c++) {   // ধাপ ১: top row, বাম থেকে ডানে
            result.push(matrix[top][c]);
        }
        top++;                                              // top row শেষ, boundary নিচে নামালাম

        for (let r: number = top; r <= bottom; r++) {   // ধাপ ২: right column, উপর থেকে নিচে
            result.push(matrix[r][right]);
        }
        right--;                                            // right column শেষ, boundary বামে আনলাম

        if (top <= bottom) {                              // ধাপ ৩ (শর্তসাপেক্ষ): bottom row, ডান থেকে বামে
            for (let c: number = right; c >= left; c--) {
                result.push(matrix[bottom][c]);
            }
            bottom--;                                         // bottom row শেষ, boundary উপরে আনলাম
        }

        if (left <= right) {                              // ধাপ ৪ (শর্তসাপেক্ষ): left column, নিচ থেকে উপরে
            for (let r: number = bottom; r >= top; r--) {
                result.push(matrix[r][left]);
            }
            left++;                                           // left column শেষ, boundary ডানে আনলাম
        }
    }

    return result;   // spiral order-এ সব element
};