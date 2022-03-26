import Modal from 'react-modal';

import {
    Container,
    } from './styles';

interface NewTransationModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransationModal({
    isOpen,
    onRequestClose,
} : NewTransationModalProps) {
  return (
    <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overley' //substituir o estilo all
        className='react-modal-content'
    >
        <Container>
            <h2>Cadastrar transação</h2>

            <input 
                placeholder="Título"
            /> 

            <input
                type="number"
                placeholder="Valor"
            />

            <input 
                placeholder="Categoria"
            />

            <button type='submit'>
                Cadastrar
            </button>    
        </Container>  
    </Modal>
  );
}




