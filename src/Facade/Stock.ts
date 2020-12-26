import Product from "./Product";

type Item = { product: Product; quantity: number };

class Stock {
  private stock: Item[] = [];

  public productIndexOnStock = (product: Product): number => {
    return this.stock.findIndex((prod) => prod.product.getName() === product.getName());
  }

  public stockEntry(product: Product, quantity: number): boolean {
    try {
      const index = this.productIndexOnStock(product);

      if (index >= 0) {
        this.stock[index].quantity += quantity;
      } else {
        this.stock.push({ product, quantity })
      }

      return true;
    } catch (err) {
      console.log('Error on product entry', err);
      return false;
    }
  }

  public outOfStock(product: Product, quantity: number): boolean {
    try {
      const index = this.productIndexOnStock(product);

      if (index >= 0) {
        this.stock[index].quantity -= quantity;
        return true;
      }

      return false;
    } catch (err) {
      console.log('Error on product entry', err);
      return false;
    }
  }

  public getStock() {
    return this.stock;
  }
}

export default Stock;