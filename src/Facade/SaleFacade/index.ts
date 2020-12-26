import EmailSender from '../EmailSenders/IEmailSender';
import Client from '../Client';
import Product from '../Product';
import Sale from '../Sale';
import Stock from '../Stock';

class SaleFacade {
  private sale: Sale;
  private products: Product[];
  private stock: Stock;
  private client: Client;
  private emailSender: EmailSender;

  constructor(sale: Sale, products: Product[], stock: Stock, client: Client, emailSender: EmailSender) {
    this.sale = sale;
    this.products = products;
    this.stock = stock;
    this.client = client;
    this.emailSender = emailSender;
  }

  public registerSale() {
    const indexes = this.products.map((prod) => this.stock.productIndexOnStock(prod));

    const allOnStock = indexes.every((item) => item >= 0);

    if (allOnStock) {
      
      this.products.map((prod) => this.stock.outOfStock(prod, 3)); // hard coded quantity

      console.log('venda realizada', this.sale);

      this.emailSender.sendEmail('salefacade@empresa.com', this.client.getEmail());
    } else {
      console.log('Algum dos produtos está em falta');
}
  }
}

export default SaleFacade;