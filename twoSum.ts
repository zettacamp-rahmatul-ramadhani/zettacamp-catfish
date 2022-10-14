const sum = (args: number[], args2: number): number[][] => {
    let result: number[][] = []
    for (let i = 0; i < args.length; i++) {
        if (args[i] + args[i+1] === args2) {
            result.push([i, i+1])
        }
    }
    return result
}
let nums: number[] = [5, 7, 4, 8]
let target: number = 12
console.log(sum(nums, target));
