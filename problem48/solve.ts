function rotate(matrix: number[][]): void {
    const n: number = matrix.length;

    // ধাপ ১: Transpose করি (row <-> column swap, শুধু diagonal-এর উপরের অংশ)
    for (let r: number = 0; r < n; r++) {
        for (let c: number = r + 1; c < n; c++) {   // c শুরু r+1 থেকে, diagonal নিজে বাদ, double-swap এড়াতে
            const temp: number = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = temp;
        }
    }

    // ধাপ ২: প্রতিটা row আলাদাভাবে reverse করি
    for (let r: number = 0; r < n; r++) {
        let left: number = 0;
        let right: number = n - 1;

        while (left < right) {                        // classic two-pointer reversal
            const temp: number = matrix[r][left];
            matrix[r][left] = matrix[r][right];
            matrix[r][right] = temp;
            left++;
            right--;
        }
    }
};