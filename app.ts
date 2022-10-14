type argument = number | string

const union = (args: argument[]): string => {
    let result: string = args.join(" ")
    return result
}

console.log(union([1, 'data', '3', 'result']));
console.log(union(['Bejo', 'has', 4, 'car', 9, 'bycicle']));
