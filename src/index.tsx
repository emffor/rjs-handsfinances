import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  //tipo um banco de dados do miragejs
  models: {
    transaction: Model,
  },

  //dados pre-cadastrados no banco
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Comissão de vendas',	
          type: 'deposit',
          category: 'Dev',
          amount: 2000,
          createdAt: new Date('2022-01-14 09:20:43'),
        },
        {
          id: 2,
          title: 'Aluguel da loja',	
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2022-01-16 10:10:13'),
        },
      ]
    });
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    //JSON.parse transpor um json para um objeto
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

