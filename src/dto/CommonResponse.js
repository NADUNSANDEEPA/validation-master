class CommonResponse {

  static success(data = null, message = "Success", status = 200) {
    return {
      success: true,
      status,
      message,
      data
    };
  }

  static failure(message = "Failed", data = null, status = 400) {
    return {
      success: false,
      status,
      message,
      data
    };
  }

}

export default CommonResponse;