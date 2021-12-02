test('multiplies', () => {
  let fiver: Dollar = {amount: 5};
  let tenner = times(fiver, 2);
  expect(tenner.amount).toBe(10);
} )

function times({ amount }: Dollar, times: number): Dollar {
  return {amount: amount * times}
}

type Dollar = {
  amount: number
}
