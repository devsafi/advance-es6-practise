const numbers = [3, 4, 4, 5, 6]

// map eer kaj holo map diye j function dibo oita prottek upadan er upor calabe then prottek return man alada ekta array er vhitor rakhbe,

function double(num) {
    return num * 2;
}

const result = numbers.map(double);
console.log(result);


// with arrow function with easy way.
const double2 = n => n * 2;
console.log(numbers.map(double2));

// with more easy way.
console.log(numbers.map(n => n * 2));

const members = [3, 4, 5, 5, 6, 7, 5];
console.log(members.map(m => m + 2)); // aikhane prottek shonkhar shathe 2 kore jog korar ekta function kore return er man niye alada ekta array banaiche.

console.log(members.map(m => m * m));
console.log(members.map(m => m / 2));


const friends = ['tom', 'jom', 'mom', 'oom', 'jojooa', 'jojdojd']
console.log(friends.map(frnd => frnd.length));
console.log(friends.map(frnd => frnd[0]));