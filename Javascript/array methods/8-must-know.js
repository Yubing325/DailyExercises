//https://www.youtube.com/watch?v=R8rmfD9Y5-c

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}    
]

const filtered = items.filter(t => t.price <= 10);

//console.log(filtered);

const mapped = items.map(t => [t.name, t.price]);

console.log(mapped);
