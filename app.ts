const combination = (args1:string, args2:number, args3:number): string => {
    return args1.slice(args2, args3)
}
console.log(combination("Learning Typescript is different than Javascript", 9, 19));
console.log(combination("Learning Typescript is different than javascript", 0, 12));