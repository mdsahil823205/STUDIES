// ====================sum of array ======================================
// let arr = [10, 20, 30, 40, 50]

// let sum = 0
// console.log(n)
// for (let i = 0; i < 5; i++) {
//     sum = arr[i] + sum
// }
// console.log(sum)
// let mean = sum / n

// console.log((mean.toFixed(1)))

// //==================== find the greatest number =======================
// let arr = [10, 20, 15, 40, 50]
// let max = arr[0]
// let index = 0
// let length = arr.length

// for (let i = 1; i < length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//         index = i
//     }
// }
// console.log(max)
// console.log(index)

// ==================== find the second greatest number =======================
// let arr = [10, 20, 15, 40, 50]
// let max = Math.floor(Math.max(arr[0], arr[1]))
// let SMax = Math.floor(Math.min(arr[0], arr[1]))
// let length = arr.length
// for (let i = 2; i < length; i++) {
//     if (arr[i] > max) {
//         SMax = max
//         max = arr[i]
//     } else if (arr[i] > SMax && max > SMax) {
//         SMax = arr[i]
//     }

// }
// console.log(max, SMax)

/// ============= left rotation===========================
// let arr = [5, 5567, 676, 45, 5765, 23]
// let temp = arr[0] //5
// let lenght = arr.length

// for (let i = 1; i < lenght; i++) {
//     arr[i - 1] = arr[i]
// }
// arr[arr.length - 1] = temp
// console.log(arr)


//=======================move zero at the end and 1 at the first==================
let arr = [0, 1, 0, 1, 1, 0, 1];

let count1 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        // console.log(arr[i]);
        count1++;
    }
    console.log(count1);
}

for (let i = 0; i < arr.length; i++) {
    if (i < count1) {
        arr[i] = 1;
    } else {
        arr[i] = 0;
    }
}

console.log(arr);