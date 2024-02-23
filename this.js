// this diye kono class er kichu access korle oi class er property der access bujay.
// class er moddeh kono object banale oi object er property k mean korbe holo this keyword.
class Person{
    constructor(name, hobby){
        this.name = name;
        this.hobby = hobby;
    }
    
    sleep(){
        console.log(`now sleep ${this.name}`);
    }
}

const kawser = new Person('Kawser', 's');
console.log(kawser);

const ferdous = new Person('Ferdous', 'e');
console.log(ferdous);

const Safi = new Person('Safi', 'x');
console.log(Safi);