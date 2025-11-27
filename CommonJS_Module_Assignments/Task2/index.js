const Car = require('./car');

const car1 = new Car('BMW','M8',2022);
const car2 = new Car('Mercedes-Benz','CLS',2022);

car1.drive();
console.log(car1.getInfo());
car2.drive();
console.log(car2.getInfo());


