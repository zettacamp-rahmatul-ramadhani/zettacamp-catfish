const maxArea = (height: number[]): number => {
    let result: number = 0
    let left: number = 0
    let right: number = height.length - 1
    while (left < right) {
        let w: number = right - left
        let h: number = Math.min(height[left], height[right])
        let area: number = h * w
        result = Math.max(result, area)
        if (height[left] < height[right]) { left++ }
        else if (height[left] > height[right]) { right-- }
        else {
            left++
            right--
        }
    }
    return result
}
console.log(maxArea([1,1]));
