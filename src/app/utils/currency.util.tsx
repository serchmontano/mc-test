export const formatCurrency = (amount: number): string => {
  return amount
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace('$', '');
};
