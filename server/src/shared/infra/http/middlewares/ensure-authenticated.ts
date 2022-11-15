import { NextFunction, Request, Response } from "express";
import StatusCode from "http-status-code";
import auth from "@config/auth";
import AppError from "@shared/errors/AppError";
import { verify } from "jsonwebtoken";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError("Missing auth token", 400);
  }
  const [, token] = authHeader?.split(" ");

  try {
    const { secret } = auth.jwt;

    if (!secret) {
      throw new AppError("Missing key secret", 500);
    }

    const decoded = verify(token, secret);

    const { sub } = decoded as ITokenPayload;

    req.user = {
      id: sub,
    };

    next();
  } catch (err) {
    throw new AppError("Invalid JWT", StatusCode.uNA);
  }
};

export default ensureAuthenticated;
