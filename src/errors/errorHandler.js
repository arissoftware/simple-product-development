import { ApiError } from "./apiErrors.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      succcess: false,
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
