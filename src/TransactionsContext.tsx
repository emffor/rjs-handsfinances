import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// o TransactionInput vai herdar todos os campos do Transaction - id e createdAt.
// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// o pick seleciona quais campos eu quero.
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsProviderProps {	
    children: ReactNode; //aceita qualquer conteúdo valido do react
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData)
    ;

export function TransactionsProvider({ children }:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
      api.get('/transactions') //search transactions
      .then(response => setTransactions(response.data.transactions))
    },[]);

    function createTransaction(transaction: TransactionInput){
        api.post('/transactions', transaction);
    }

    return (
        <TransactionsContext.Provider value={{transactions,createTransaction}}>
            {children}
        </TransactionsContext.Provider> 
    )
}