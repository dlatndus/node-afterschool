class Product { 
    constructor(name, price){
        this.name = name;
        this.price = price;
    }


print(){
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`)
}
}

let products = [
    new Product('banana', 1200),
    new Product('apple',  2000),
    new Product('pear', 3000),
    new Product('sweet potato', 700),
    new Product('potato', 600),
    new Product('water melon', 5000)

];

function print(products){
    console.log(`${products.name}의 가격은 ${products.price}입니다`)
};

for(const fruit of products){
    print(fruit);
}

for(let index =0; index < products.length; index++){
    console.log(products[index].name + "\t" + products[index].price);
}

for(const key in products){
    console.log(products[key].name + "\t" + products[key].price);
}

products.forEach(e =>{
    console.log(e.name + "\t" + e.price)
})