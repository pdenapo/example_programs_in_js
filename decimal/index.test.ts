import Decimal from 'decimal.js';
import { expect, test } from "bun:test";

test("2 + 2", () => {
    let x = new Decimal(2)
    let y = new Decimal('2')
    let z = Decimal.add(x, y)
    expect(
        z.toString()
    ).toBe("4");
});

test("2.5 - 1.3=1.2", () => {
    let x = new Decimal(2.5)
    let y = new Decimal('1.3')
    let z = Decimal.sub(x, y)
    expect(
        z.toString()
    ).toBe("1.2");
});

test("2.5 * 3.2= 8", () => {
    let x = new Decimal(2.5)
    let y = new Decimal('3.2')
    let z = Decimal.mul(x, y)
    expect(
        z.toString()
    ).toBe("8");
});