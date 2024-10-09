function Product(productID, price){
    this.productID = productID;
    this.price = price;
    this.changePrice = function(discount){
        const discountedPercent = discount /100;
        this.price = this.price - (discountedPercent * this.price)
        
    }
}

const product1 = new Product("SSA02", 120);

product1.changePrice(10);
console.log(product1);