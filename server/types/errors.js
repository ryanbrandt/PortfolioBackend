// not sure why i thought custom errors were necessary but here we are

export class InstanceNotFoundError {
  constructor() {
    this.message = "Requested instance not found";
  }
}

export class MethodNotSupportedError {
  constructor() {
    this.message = "Http method not supported for requested endpoint";
  }
}
