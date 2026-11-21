//=============linerar serarch=====================
// let arr = [1, 8, 4, 6, 3, 74, 4]
// let index = -1
// let target = Number(11)
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         index = i
//     }
// }
// console.log(index == -1 ? index : index)

//-------------binary search-------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 5
let start = 0
let end = arr.length - 1
while (start <= end) {
    let mid = Math.floor((start + end) / 2)  
    if (arr[mid] === target) {
        console.log(mid)
        break
    } else if (arr[mid] < target) {
        start = mid + 1
    } else {
        high = mid - 1
    }
}
if(start > end){
    console.log(-1)
}