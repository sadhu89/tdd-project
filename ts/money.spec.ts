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

test('adds 2 money', () => {
  let fifteenDollars: Money = {amount: 15, currency: "USD"};
  let fiveDollars: Money = {amount: 5, currency: "USD"};
  let tenDollars: Money = {amount: 10, currency: "USD"};

  let portfolio: Portfolio = [];
  add(portfolio, fiveDollars);
  add(portfolio, tenDollars);
  expect(evaluate(portfolio, "USD")).toStrictEqual(fifteenDollars);
})

const times = ({ amount, currency }: Money, times: number): Money => {
  return {amount: amount * times, currency}
}

const divide = ({amount, currency}: Money, divisor: number): Money => {
  return {amount: amount/divisor, currency}
}

const add = (portfolio: Portfolio, money: Money) => {
  return portfolio.push(money)
}

const evaluate = (portfolio: Portfolio, currency: string) => {
  let total = portfolio.reduce((sum, money) => { return sum + money.amount }, 0);
  return {amount: total, currency}
}

type Money = {
  amount: number
  currency: string
}

type Portfolio = Money[]
