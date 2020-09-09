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

//https://ultimatecourses.com/blog/classes-vs-interfaces-in-typescript#:~:text=Learn%20TypeScript%20the%20right%20way!&text=A%20class%20is%20a%20blueprint,implementation%20nor%20initialisation%20for%20them.