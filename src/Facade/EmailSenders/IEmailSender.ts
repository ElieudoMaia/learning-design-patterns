interface IEmailSender {
  public sendEmail(from: string, to: string): void;
}

export default IEmailSender;