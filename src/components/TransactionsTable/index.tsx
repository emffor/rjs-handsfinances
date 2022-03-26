
import { useEffect } from 'react';
import {
Container
} from './styles';

export function TransactionsTable(){
  useEffect(() => {
      fetch('http://localhost:3000/api/transactions')
      .then(response => response.json()) //pegar resposta da requisição
      .then(data => console.log(data)) //quando estiver convertida, mostrar no console.log
  },[])

  return (
    <Container>
        <table>

            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                   <td>Desenvolvimento de website</td>
                   <td className="deposit">R$12.000,00</td>
                   <td>Desenvolvimento</td>
                   <td>05/01/2021</td>
                </tr>

                <tr>
                   <td>Aluguel</td>
                   <td className='withdraw'>- R$2.000,00</td>
                   <td>Apto</td>
                   <td>16/01/2021</td>
                </tr>

            </tbody>
        </table>
    </Container>
  );
}