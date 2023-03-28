let products = [
    {name : 'banana', price : 1200},
    {name : 'apple', price : 2000},
    {name : 'pear', price : 3000},
    {name : 'sweet potato', price : 700},
    {name : 'potato', price : 600},
    {name : 'water melon', price : 5000},
];

function print(fruit){
    console.log(`${fruit.name}의 가격은 ${fruit.price}입니다`)
};

for(const fruit of products){
    print(fruit);
}

// for(let index =0; index < products.length; index++){
//     const element = products[index];
//     console.log(element);
// }

// for(const key in products){
//     console.log(key + "\t" + products[key].name + "\t" + products[key]);
// }

// for(const item of products){
//     console.log(item.name + "\t" + item.price);
// }