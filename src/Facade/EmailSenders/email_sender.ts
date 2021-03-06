import IEmailSender from './IEmailSender';

class EasyEmail implements IEmailSender {
  public sendEmail(from: string, to: string): void {
    console.log(`Sending email from ${from}, to ${to}`);
  }
}

export default EasyEmail;