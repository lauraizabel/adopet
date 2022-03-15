class AppError {
  public readonly message: string;
  public readonly statusCode: Number;

  constructor(message: string, statusCode: Number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError