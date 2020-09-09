class PizzaMaker{
    static create(event: { name: string; toppings: string[]}){
        return {name: event.name, toppings: event.toppings};
    }
}

const pizza = PizzaMaker.create({
    name: 'Inferno',
    toppings:['cheese', 'peppers'],
})

console.log(pizza);