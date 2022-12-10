import { ErrorRequestHandler, Request, Response } from "express";
import AppError from "@shared/errors/AppError";

const errorMiddleware: ErrorRequestHandler = (
  error: AppError,
  _: Request,
  response: Response,
) => {
  console.log({ error });

  if (error instanceof AppError) {
    const { statusCode, message } = error;
    return response
      .status(statusCode)
      .json({ status: "error", content: { message } });
  }

  return response.status(500).json({
    status: "error",
    content: {
      message: "Internal server error",
      error: (error as any).toString(),
    },
  });
};

export default errorMiddleware;
