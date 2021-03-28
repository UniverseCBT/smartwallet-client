export function transformCurrency(money: number): string {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol'
  });
}
