export class HttpException extends Error {
  constructor(message, statusCode) {
    if (typeof message === "string") {
      super(message);
    } else {
      super(JSON.stringify(message));
    }
    this.statusCode = statusCode;
  }
}

