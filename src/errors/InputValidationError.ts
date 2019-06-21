import ApiError from './ApiError';

interface ErrorInfo {
  type: string;
}

interface Response {
  [key: string]: ErrorInfo;
}

export default class InputValidationError extends ApiError {
  private _response: Response;

  constructor(response: Response) {
    super();

    Object.setPrototypeOf(this, InputValidationError.prototype);

    console.log(response);
    this._response = response;
  }

  public getGeneral(): ErrorInfo | undefined {
    return this._response._general;
  }

  public getErrors(): Response {
    const errors = { ...this._response };
    delete errors._general;
    return errors;
  }
}
