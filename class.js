// class has some property and object.
// class bananor somoy class er nam er first letter shob somoy capital dite hoy.

class Info{
    countryName = 'Bangladesh';
    // constructor method er man paite hole class call korar somoy constructor er parameter er value diye dite hobe.

    constructor(name){
        this.name = name;
    }

    speak(talk){
        console.log("hello world", talk, '?');
    }
}

// class k call korar somoy class Name er age new keyword boshate hobe.
const country = new Info('faltu desh');
console.log(country);
country.speak('ki kosh');

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    
    lecturer(){
        console.log('I am your new teacher');
    }
}

const anas = new Teacher('Anas sir', 'bangla');
console.log(anas);

const rafiq = new Teacher('rafiq sir', 'math');
console.log(rafiq);

// multiple use of a class.