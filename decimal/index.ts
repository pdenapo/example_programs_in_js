import Decimal from 'decimal.js';

let x = new Decimal(2)
let y = new Decimal('2')
let z = Decimal.add(x, y)
console.log("z=", z.toString())