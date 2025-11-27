class Car {
    constructor(brand,model,year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return {
            brand:this.brand,
            model:this.model,
            year:this.year
        }
    }
    drive() {
        console.log(`${this.year} ${this.brand} ${this.model} is driving.`);
    }
}

module.exports = Car;