export const formatCreditCardNumber = (cardNumber: string): string => {
  cardNumber = cardNumber.toString();
  return cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
};

export const maskCreditCardNumber = (cardNumber: string): string => {
  cardNumber = cardNumber.toString();
  const visibleSection = cardNumber.slice(-4);
  return `•••• ${visibleSection}`;
};

export const formatExpiryDate = (month: string, year: string): string => {
  const shortYear = year.slice(-2);
  return `${month}/${shortYear}`;
};
