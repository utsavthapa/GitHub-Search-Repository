// eslint-disable-next-line import/no-anonymous-default-export
export default {
  errorHandler: (error: any) => {
    const { response } = error;
    const status = response ? response.status : "";

    switch (status) {
      case 400:
      case 401:
      case 403:
      case 404:
      case 409:
      case 417:
      case 500:
      case 500:
        console.log("Developer Api Error:", error);
        if (error.response.data) throw error.response.data;
        else {
          throw new Error("Sorry Internal Server Error");
        }

      default:
        console.log("Developer Api Error:", error);
        let errorObj = {
          errorMessage:
            error.message ||
            error.errorMessage ||
            "Sorry, Internal Server Problem occurred.",
          stack: error.stack,
        };
        throw errorObj;
    }
  },
};
