/**
 * Custom DB errors
 */
export class InstanceNotFoundError {
  constructor() {
    this.message = "Requested instance not found";
  }
}

/**
 * Custom API errors
 */
class ApiError {
  // lol
}

export class MethodNotSupportedError extends ApiError {
  constructor() {
    super();
    this.message = "Http method not supported for requested endpoint";
  }
}
