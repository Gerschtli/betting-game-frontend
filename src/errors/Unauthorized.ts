import ApiError from './ApiError';

export default class Unauthorized extends ApiError {
  constructor() {
    super();

    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}
