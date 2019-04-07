import ApiError from './ApiError';

export default class UnprocessableEntity extends ApiError {
  constructor() {
    super();

    Object.setPrototypeOf(this, UnprocessableEntity.prototype);
  }
}
