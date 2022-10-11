const purcasing = (detail, discount, tax) => {
    const pd = detail - (detail * (discount/100))
    const pt = pd + (pd * (tax/100))

    console.log('Discount : %d %, Price after discount is : %f, amount of tax is : %d %, price after tax is : %f', discount, pd, tax, pt)
}

console.log(purcasing(12000, 20, 10));