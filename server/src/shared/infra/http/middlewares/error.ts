import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

const Error = (
  err: Error,
  req: Request,
  res: Response,
  next_: NextFunction,
) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }

  console.error(err);

  return res
    .status(500)
    .json({ status: "error", message: "Internal server error" });
};

export { Error };
