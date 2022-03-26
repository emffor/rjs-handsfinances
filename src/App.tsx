import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";

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
    <>
        {/* 
            em header passando a função que está dentro de header 
            componente filho alterando o estado através do do componente de funções.
        */}
        <Header 
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
        />
        <Dashboard />
        <Modal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModal}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
        

        <GlobalStyled />
    </>
  );
}

