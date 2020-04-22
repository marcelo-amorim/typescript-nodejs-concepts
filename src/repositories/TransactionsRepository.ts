import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;

  value: number;

  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const { transactions } = this;

    /*
      método utilizando reduce
    * */
    const { income, outcome, total } = transactions.reduce(
      (accumulator: Balance, transaction: Transaction) => {
        const { type, value } = transaction;
        switch (type) {
          case 'income':
            accumulator.income += value;
            accumulator.total += value;
            break;

          case 'outcome':
            accumulator.outcome += value;
            accumulator.total -= value;
            break;

          default:
            break;
        }

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    const balance = {
      total: Number(total.toFixed(2)),
      income,
      outcome,
    };

    return balance;

    /*
      método utilizando filter e reduce
    * */
    // const income = transactions
    //   .filter(transaction => transaction.type === 'income')
    //   .reduce((sum, transaction) => sum + transaction.value, 0);

    // const outcome = transactions
    //   .filter(transaction => transaction.type === 'outcome')
    //   .reduce((sum, transaction) => sum + transaction.value, 0);

    // const total = income - outcome;

    // const balance = {
    //   income,
    //   outcome,
    //   total,
    // };

    // // console.timeEnd(time);

    // return balance;

    /*
      método utilizando map
    * */
    // let totalIncome = 0;
    // let totalOutcome = 0;

    // transactions.map(transaction => {
    //   if (transaction.type === 'income') {
    //     totalIncome += transaction.value;
    //   } else if (transaction.type === 'outcome') {
    //     totalOutcome += transaction.value;
    //   }
    // });

    // const total = totalIncome - totalOutcome;

    // const balance = {
    //   income: totalIncome,
    //   outcome: totalOutcome,
    //   total,
    // };

    // return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
