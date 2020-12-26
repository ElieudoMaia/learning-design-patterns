import EmailSender from './EmailSenders/email_sender';

import Client from './Client';
import Product from './Product';
import Sale from './Sale';
import Stock from './Stock';

const antonio = new Client('Antônio', '000.000.000-00', 'test@teste.com');

const feijao = new Product('Feijão', 7.20);
const arroz = new Product('Arroz', 4.36);
const carne_moida = new Product('Carne Moída', 21.50);

const stock = new Stock();

stock.stockEntry(feijao, 100);
stock.stockEntry(arroz, 200);
stock.stockEntry(carne_moida, 0);

// Tendo o cliente e os produtos dísponíveis, a intenção agora é registar uma venda desses produtos para o cliente!
/* 
    O processo de venda inclui:
        Verificar se há quantidade em estoque
        Retirar a quantidade do produto vendido do estoque
        Enviar um email para o cliente com a confirmação da compra
*/

// Implementação da venda do produto;

const hasBean = stock.productIndexOnStock(feijao);
const hasRice = stock.productIndexOnStock(arroz);
const hasMeat = stock.productIndexOnStock(carne_moida);

const allOnStock = [hasBean, hasRice, hasMeat].every((item) => item >= 0);

if (allOnStock) {
  const venda = new Sale(antonio, [feijao, arroz, carne_moida]);
  stock.outOfStock(feijao, 2);
  stock.outOfStock(arroz, 5);
  stock.outOfStock(carne_moida, 1);

  console.log('venda realizada', venda);

  const emailSender = new EmailSender();
  emailSender.sendEmail('emaildaempresa@empresa.com', antonio.getEmail());
} else {
  console.log('Algum dos produtos está em falta');
}

/*
  No exemplo acima o registro de uma venda incluir muitas outras atividades que são delegadas ao cliente (que está tentando cadastrar um cliente)
  Usando-se um Facade, a implementação da venda torna-se mais simples para o cliente;
*/
import SaleFacade from './SaleFacade';

const vendaFacade = new Sale(antonio, [arroz, feijao]);
const easyEmail = new EmailSender();

const saleFacade = new SaleFacade(vendaFacade, [arroz, feijao], stock, antonio, easyEmail);
saleFacade.registerSale();

/* 
  usando-se um Facade consegue-se tirar do cliente a resposabilidade de manipular manualmente
  todas as complexidades de efetuar uma determinada ação, no caso, a venda.
*/