// export const findLessCostPath = (board: number[][]): number => {
//   return 0;
// };
var example = [[4, 8], [6, 7]];
// i => row
// j => column
// go down => i +1
// go up => i-1
// go right => j+1
// go left => j-1
console.log('path -------------------');
var count = 0;
var count2 = 0;
var blockingCells;
blockingCells = [];
console.log(example[0][0]); // first element
count += example[0][0];
blockingCells.push([0, 0]);
// 'can go down?????????????????
var val = true;
for (var i = 0; i < blockingCells.length; i++) {
    if (blockingCells[i][0] === 1 && blockingCells[i][0] === 0)
        val = false;
}
console.log('can go down? ', val);
console.log(example[1][0]); // Go down => i+1
count += example[1][0];
blockingCells.push([1, 0]);
console.log(example[1][1]); // go right => j +1
count += example[1][1];
blockingCells.push([1, 1]);
console.log('total count: ', count);
console.log('path -------------------');
console.log(example[0][0]); // first element
count2 += example[0][0];
console.log(example[0][1]); // Go right => j+1
count2 += example[0][1];
console.log(example[1][1]); // go left => i+1
count2 += example[1][1];
console.log('total count 2: ', count2);
