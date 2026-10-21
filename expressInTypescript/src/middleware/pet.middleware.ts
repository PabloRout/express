import type { Request, Response, NextFunction } from "express";

type passParams = {
  password?: string | undefined;
};

export const validateNumericId = (
  request: Request<{ id: string }, unknown, {}, passParams>,
  response: Response<{ message: string }>,
  nextfunction: NextFunction,
) => {
  const { id } = request.params;
  const { password } = request.query;

  if (password === undefined)
    response.status(400).json({ message: "please Provide a password" });

  if (!/^\d+$/.test(id)) {
    response.status(400).json({ message: "Pet Id must be a number !" });
  } else if (!(password === "please")) {
    response.status(400).json({ message: "wrong password" });
  } else {
    nextfunction();
  }
};
