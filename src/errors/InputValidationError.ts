import ApiError from './ApiError';

interface ErrorInfo {
  type: string;
}

interface Response {
  [key: string]: ErrorInfo;
}

export default class InputValidationError extends ApiError {
  private readonly _response: Response;

  constructor(response: Response) {
    super();

    Object.setPrototypeOf(this, InputValidationError.prototype);

    this._response = response;
  }

  public get general(): ErrorInfo | undefined {
    return this._response._general;
  }

  public get errors(): Response {
    const errors = { ...this._response };
    delete errors._general;
    return errors;
  }
}
