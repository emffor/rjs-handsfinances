import logoImg from '../../assets/logo.png';

import { 
    Container,
    Content, 
} from './styles';

//receber uma propriedade para receber a function que está dentro do componente App();

interface HeaderProps {
   onOpenNewTransactionModal: () => void; 
   //essa função não vai receber nenhum parâmetro, por isso o tipo é vazio.  
}

export function Header({ onOpenNewTransactionModal } : HeaderProps){


    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

                
            </Content>
        </Container>
    )
}