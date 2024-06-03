type Transaction = {
  business: string;
  businessLogo: string;
  date: string;
  amount: number;
  reward: number;
};

export const getSortedTransactions = (
  transactions: Transaction[],
  limit: number,
): Transaction[] => {
  const sortedTransactions = transactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  if (limit === -1) {
    return sortedTransactions;
  } else {
    return sortedTransactions.slice(0, limit);
  }
};
