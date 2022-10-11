const purcasing2 = (element, buy) => {
    const priceAfterDiscount = element.price - (element.price * (element.discount/100))
    const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (element.tax/100))
    const total = priceAfterTax * buy
    console.log('price of item is : %f added to total', total);
    return total
}

const detail = [
    {
        name: "book 1",
        price: 12000,
        discount: 10,
        tax: 10,
        stock: 3
    },{
        name: "book 2",
        price: 50000,
        discount: 20,
        tax: 12,
        stock: 0
    },{
        name: "book 3",
        price: 32000,
        discount: 20,
        tax: 10,
        stock: 5
    },{
        name: "book 4",
        price: 100000,
        discount: 50,
        tax: 10,
        stock: 1
    }
]

let total = 0
const buy = 2
for (let i = 0; i < detail.length; i++) {
    const element = detail[i];
    if (element.stock < buy) {
        console.log("%s out of stock", element.name);
    } else {
        total += purcasing2(element, buy)
        console.log('total price is : ', total);
    }
}