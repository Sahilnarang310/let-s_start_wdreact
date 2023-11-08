function minOperationsToZero(testCases) {
    let results = [];
    for(let t=0; t<testCases.length; t++) {
        let arr = testCases[t];
        let moves = 0;
        while(arr.length > 0) {
            let xor = arr[0];
            let r = 1;
            while(r < arr.length && xor !== 0) {
                xor ^= arr[r];
                r++;
            }
            arr = new Array(r).fill(0).concat(arr.slice(r));
            moves++;
        }
        results.push(moves);
    }
    return results;
}

// Test cases
let testCases = [
    [2, 2],
    [7, 1, 2, 0],
    [1, 1, 2, 2, 3, 3]
];

console.log(minOperationsToZero(testCases));
