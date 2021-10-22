// // Exercise # 1

// const ls = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const l2 = [1, 2, 3, 4, 6, 7, 8, 9]

// function firstNonConsecutive(arr) {
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] - 1 !== arr[i-1]) {
//             return arr[i-1];
//         }
//     }
//     return -1;
// }

// console.log(firstNonConsecutive(l2))

// Exercise # 1.2 Recursive
// const ls = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const l2 = [1, 2, 3, 4, 6, 7, 8, 9];

// function firstNonConsecutive2(arr, counter = 1) {
//     if(counter == arr.length) return -1;
//     if(arr[counter] - 1 !== arr[counter - 1]) return arr[counter-1]; 
//     return firstNonConsecutive2(arr, counter = counter + 1);
// }

// console.log(firstNonConsecutive2(ls))
// console.log(firstNonConsecutive2(l2))


// Exercise # 2
// l1 = [10, 12, -9, 3, -1, 0, 15]; 
// l2 = [3, 5, 7, 9, -10, 2, -22, -1]; 
// l3 = [-3, -5, -7, -9, -10, -2, -22, -1]; 

// const myPostiveAdder = (ls) => {
//     return ls.reduce((acc, num) => {
//         if(num > 0) acc += num;
//         return acc;
//     }, 0);
// }
// console.log(myPostiveAdder(l2))

// for(let i in  [10, 12, -9, 3, -1, 0, 15]) {
//     console.log(i)
// }

