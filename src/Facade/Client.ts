class Client {
  private name: string;
  private cpf: string;
  private email: string;

  constructor(name: string, cpf: string, email: string) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
  }

  public getClient() {
    return { name: this.name, cpf: this.cpf };
  }

  public getEmail() {
    return this.email;
  }
}

export default Client;