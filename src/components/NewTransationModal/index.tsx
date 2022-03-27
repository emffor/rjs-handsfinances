import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import {
    Container,
    TransactionTypeContainer,
    RadioBox,
    } from './styles';

interface NewTransationModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransationModal({
    isOpen,
    onRequestClose,
} : NewTransationModalProps) {

    const { createTransaction } = useContext(TransactionsContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');


    //ele vai aguardar a function retornar caso de tudo certo ele fecha o modal.
    async function handleCreateNewTransation(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        });  

        //apagando o modal.
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        //fechando o modal.   
        onRequestClose();
    }

  return (
    <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overley' //substituir o estilo all
        className='react-modal-content'
    >   
        <button 
        type='button' 
        onClick={onRequestClose} 
        className='react-modal-close'
        >
            <img src={closeImg} alt='Fechar Modal' />
        </button>

        <Container onSubmit={handleCreateNewTransation}>
            <h2>Cadastrar transação</h2>

            <input 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
          /> 

            <input
                type="number"
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>

                <RadioBox 
                    type='button'
                    onClick={() => { setType('deposit') }}
                    isActive={type === 'deposit'}
                    activeColor="green"
                > 
                    <img src={incomeImg} alt='Entrada' />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    type='button'
                    onClick={() => { setType('withdraw') }}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                > 
                    <img src={outcomeImg} alt='Saída' />
                    <span>Saída</span>
                </RadioBox>

            </TransactionTypeContainer>

            <input 
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type='submit'>
                Cadastrar
            </button>    
        </Container>  
    </Modal>
  );
}




