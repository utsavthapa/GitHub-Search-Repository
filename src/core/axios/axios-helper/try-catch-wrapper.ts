import ApiError from "./api-error";

export default {
  genericTryCatch: async (executionMethod: Function) => {
    try {
      const response = await executionMethod;
      return response;
    } catch (error) {
      throw ApiError.errorHandler(
        error instanceof Promise ? await error : error
      );
    }
  },
};
