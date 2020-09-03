import { Response, Request } from "express";
import db from "../database/connection";
import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { config } from "dotenv";

export default new (class SessionsController {
  async auth(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await db("users").select("*").where({ email: email }).first();

    if (!user) {
      return res.json({ Error: "E-mail/Senha incorreta(o)" });
    }

    const passwordMatched = await compare(password, user.password as string);

    if (!passwordMatched) {
      return res.json({ Error: "E-mail/Senha incorreta(o)" });
    }

    delete user.password;

    const token = sign({}, process.env.SECRET as string, {
      subject: "",
      expiresIn: "1d",
    });

    return res.json({
      user,
      token,
    });
  }
})();
