// data access
const data = [{ name: 'Safi', age: 20, address: 'matikata' }];
// console.log(data.address); // undefined. karon aita object na.

// console.log(data[0]); // { name: 'Safi', age: 20, address: 'matikata' }
// console.log(data[0].address); // matikata


const products = {
    count: 500,
    data: [
        { name: 'asus', price: 50000 },
        { name: 'macbook', price: 150000 }
    ]
}

// console.log(products.data[1].price);

const user = {
    id: 669505,
    name: 'Safi',
    address: {
        city: 'tangail',
        village: {
            gram: 'matikata',
            post: 'matikato'

        }
    }
}

console.log(user.address.village.post);

// optional chaining
// value er sesh e ? dite hoy. aikhane oi value thakle samne agabe, na thakle undefined dibe but kono error dibe na.

console.log(user.address.street?.village.post); // undefined
