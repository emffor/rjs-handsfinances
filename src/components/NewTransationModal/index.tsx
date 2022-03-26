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
    >
        <h2>Cadastrar transação</h2>
    </Modal>
  );
}




