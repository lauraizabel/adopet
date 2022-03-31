import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import AppError from "@shared/errors/AppError";

const errorMiddleware: ErrorRequestHandler = (
  error: AppError,
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  if (error instanceof AppError) {
    const { statusCode, message } = error;
    return response
      .status(statusCode)
      .json({ status: "error", content: { message } });
  }

  console.error(error);

  _next(error);
  return response
    .status(500)
    .json({ status: "error", content: { message: "Internal server error" } });
};

export default errorMiddleware;
