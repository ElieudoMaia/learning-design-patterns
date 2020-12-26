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
stock.stockEntry(carne_moida, 25);

// Tendo o cliente e os produtos dísponíveis, a intenção agora é registar uma venda desses produtos para o cliente!

const venda = new Sale(antonio, [feijao, arroz, carne_moida]);
stock.outOfStock(feijao, 2);
stock.outOfStock(arroz, 5);
stock.outOfStock(carne_moida, 1);
