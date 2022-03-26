import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransationModal } from './components/NewTransationModal';
import { GlobalStyled } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root'); //só para acessibilidade.

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider >
        {/* 
            em header passando a função que está dentro de header 
            componente filho alterando o estado através do do componente de funções.
        */}
        <Header 
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
        />
        <Dashboard /> 

        <NewTransationModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <GlobalStyled />
    </TransactionsProvider>
  );
}

