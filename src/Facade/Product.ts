class Product {
  private name: string;
  private price: number;
  
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getProduct() {
    return { name: this.name, price: this.price };
  }

  public getPrice() {
    return this.price;
  }

  public getName() {
    return this.name;
  }
}

export default Product;