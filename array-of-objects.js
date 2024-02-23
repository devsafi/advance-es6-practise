const info = [
    { id: 1, name: 'dell', price: 40000 },
    { id: 2, name: 'lenovo', price: 50000 },
    { id: 3, name: 'asus', price: 80000 },
    { id: 4, name: 'hp', price: 60000 },
    { id: 5, name: 'mac', price: 140000 }
]

// map:
const single = info.map(nm => nm.name);
console.log(single);
console.log(info.map(p => p.price));

// forEach:
info.forEach(id => console.log(id.id));

// filter:
const expensive = info.filter(p => p.price > 60000);
console.log(expensive);

// find:
console.log(info.find(p => p.price < 50000));