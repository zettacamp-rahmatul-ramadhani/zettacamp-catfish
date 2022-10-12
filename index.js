const purcasing = (books, buy, period) => {
    const total = []
    const priceAfterDiscount = books.price - (books.price * (books.discount/100))
    const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (books.tax/100))
    const price = priceAfterTax * buy
    console.log('Total price : %f', price);
    for (let i = 0; i < period; i++) {
        total.push({
                term: i+1,
                amount: price/period
            }
        )
    }
    return total
}

const books = {
        name: "Book 1",
        price: 12000,
        discount: 10,
        tax: 10,
        stock: 5
}
const period = 6
const buy = 2
const terms = purcasing(books, buy, period)
console.log(terms);
