const combination = (args1:string, args2:number, args3:number): string => {
    let slice: string = args1.slice(args2, args3)
    if (slice.toLowerCase() !== "typescript") {
        return slice + " is not Typescript"
    }
    return slice
}
console.log(combination("Learning Typescript is different than Javascript", 9, 19));
console.log(combination("Learning Typescript is different than javascript", 0, 12));

// Challenge 
// const zigzag = (args1: string, args2: number): string =>{
//     if (args2 === 1) {
//         return args1
//     }

//     let result: string = ""
//     let row: number = 1
//     let down: boolean = true
//     let arr: any[] = []

//     for (let i = 0; i < args2; i++) {
//         arr[i] = []        
//     }

//     for (let i = 0; i < args1.length; i++) {
//         arr[row - 1].push(args1[i])

//         if (down) {
//             row += 1
//             if (row > args2) {
//                 row = args2 - 1
//                 down = false
//             }
//         } else {
//             row -= 1
//             if (row < 1) {
//                 row = 2
//                 down = true
//             }
//         }
//     }

//     for (let i = 0; i < args2; i++) {
//         result += arr[i].join('')
//     }

//     return result
// }

// let input: string = "PAYPALISHIRING"
// let row: number = 3
// console.log(zigzag(input, row));
