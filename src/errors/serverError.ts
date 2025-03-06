export default class ServerError {
  public message: string;
  public status: number;

  constructor(status: number, message: string) {
    this.message = message;
    this.status = status;
  }
}
