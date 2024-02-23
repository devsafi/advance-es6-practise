class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('this is a vehicle')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticket){
        super(name, price);
        this.seat = seat;
        this.ticket = ticket;
    }
}