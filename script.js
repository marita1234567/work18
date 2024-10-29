let price = 0;
let age = Number(prompt('Enter your age'));
switch (true) {
    case age < 10:
        price = 5;
        break;
    case age >= 10 && age < 65:
        price = 15;
        break;
    case age >= 65:
        price = 10;
        break;
}
let movie_type = prompt('Enter movie type');

switch (movie_type) {
    case '3d':
        price += 5;
        break;
}

let timeOfDay = prompt('Enter time of day');
switch (timeOfDay) {
    case 'evening':
        price += 5;
        break;
}
let hasCoupon = prompt('Do you have a coupon?');
if (hasCoupon === 'yes') {
    price = price * 0.75;
}
console.log(`Your ticket price is: ` + price);

