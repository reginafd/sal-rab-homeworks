function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

<<<<<<< Updated upstream
    
    let shippingSum;
    if ((productsSum == 0) || (productsSum >= freeShippingMinSum)) {
        console.log(shippingSum = 0);
    } else {
        console.log(shippingSum = shippingPrice);
=======
    let shippingSum = sum;
    let shippingPrice = 200
    let freeShippingMinSum = 700
        if (productsSum == 0) {
        shippingSum = 0;
        console.log (shippingSum)
    } else if (productsSum >= freeShippingMinSum) {
        console.log(shippingSum = 0)
    } else if (productsSum > 0 && productsSum < freeShippingMinSum) {
        console.log (shippingSum = shippingPrice)
>>>>>>> Stashed changes
    }
     
    // если productsSum равно 0,
    // то shippingSum присвоить значение 0

    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0

    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    let discountSum;
    let discountMinSum = 700
    if (productsSum >= discountMinSum) {
        discountSum = discountPart * productsSum / 100 : 0
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    let discountSum = 
    let discountMinSum = 700
    if (productsSum >= discountMinSum) {
        discountSum = discountPart / 100 * productsSum : 0
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    }

    // создайте переменную discountSum

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum = productsSum

    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    // прибавьте к totalSum значение shippingSum

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
