interface IEmailSender {
  sendEmail(from: string, to: string): void;
}

export default IEmailSender;