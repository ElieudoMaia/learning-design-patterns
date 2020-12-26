class Client {
  private name: string;
  private cpf: string;

  constructor(name: string, cpf: string) {
    this.name = name;
    this.cpf = cpf;
  }

  public getClient() {
    return { name: this.name, cpf: this.cpf };
  }
}

export default Client;