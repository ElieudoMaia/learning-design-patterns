import Client from './Client';
import Product from './Product';


class Sale {
  private client: Client;
  private products: Product[];

  constructor(client: Client, products: Product[]) {
    this.client = client;
    this.products = products;
  }

  public getTotalPrice(): number {
    let total = 0;
    this.products.forEach((product) => total += product.getPrice())
    return total;
  }

  public getClient() {
    return this.client.getClient();
  }
}

export default Sale;