class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.description;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setDescription(description) {
        this.description = description;
    }
}

module.exports = Product;