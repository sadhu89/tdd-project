test('multiplies in dollars', () => {
  let fiver: Money = {amount: 5, currency: "USD"};
  let expected: Money = {amount: 10, currency: "USD"}
  expect(times(fiver, 2)).toStrictEqual(expected);
} )

test('multiplies in euros', () => {
  let fiver: Money = {amount: 10, currency: "EUR"};
  let expected: Money = {amount: 20, currency: "EUR"}
  expect(times(fiver, 2)).toStrictEqual(expected);
} )

test('divides',() => {
  let originalMoney: Money = {amount: 4002, currency: "KRW"};
  let expectedMoneyAfterDivision: Money = {amount: 1000.5, currency: "KRW"};
  expect(divide(originalMoney, 4)).toStrictEqual(expectedMoneyAfterDivision);
})

function times({ amount, currency }: Money, times: number): Money {
  return {amount: amount * times, currency: currency}
}

function divide({amount, currency}: Money, divisor: number): Money {
  return {amount: amount/divisor, currency: currency}
}

type Money = {
  amount: number
  currency: string
}
