export const transformMoney = (money: number): string => {
  const intlObject = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format;

  return intlObject(money);
};
