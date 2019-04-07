import ApiError from './ApiError';

export default class BadRequest extends ApiError {
  constructor() {
    super();

    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}
