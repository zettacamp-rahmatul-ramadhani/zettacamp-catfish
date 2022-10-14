const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    let merge = [...nums1, ...nums2]
    const median = (arr: number[]): number => {
        arr = [...arr].sort((a, b) => a - b)
        let middle = Math.floor(arr.length / 2)
        return arr.length % 2 !== 0 ? arr[middle] : ((arr[middle - 1] + arr[middle]) / 2)
    }
    let result: number = median(merge)
    return result
};
let num1: number[] = [10, 15, 16]
let num2: number[] = [9, 1, 11, 22]
console.log(findMedianSortedArrays(num1, num2));
