//=======================bubble sort=========================

function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) { //outer loop cover phases
        for (let j = 0; j < n - 1 - i; j++) { // inner loop cover comparisons and operations
            //swapping
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(`bubble sort is ${arr}`)
}
bubbleSort([5, 2, 3, 5, 1, 7, 9])
//=======================selection sort=========================

function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i <= n - 1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
        // console.log(`pass ${i} is ${arr}`)
    }
    return arr
}
let final = selectionSort([2, 3, 5, 1, 7, 9])
console.log(`selection sort is ${final}`)