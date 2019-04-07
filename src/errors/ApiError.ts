export default class ApiError extends Error {
  constructor() {
    super();

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
