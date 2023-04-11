import express from "express";
import { userService } from "../services/userService";
import { body, validationResult } from "express-validator";
// import { BadRequestError } from "../../utils/reqError";

const userRouter = express.Router();

class AppError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
class BadRequestError extends AppError {
  constructor(message) {
    super(400, message);
  }
}
class UnauthorizedError extends AppError {
  constructor(message) {
    super(401, message);
  }
}

function wrapAsync(func) {
  return function (req, res, next) {
    func(req, res).catch((err) => next(err));
  };
}

userRouter.post(
  "/register",
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage(
      "올바른 이메일을 입력해주세요, 또한 대문자는 이메일에 포함할 수 없습니다."
    ),
  body("password")
    .isAlphanumeric()
    .isLength({ min: 4 })
    .trim()
    .withMessage("패스워드는 최소 4자리 이상이어야 합니다."),
  body("nickname")
    .isString()
    .isLength({ min: 2 })
    .trim()
    .withMessage("성함은 최소 2자리 이상이어야 합니다."),

  wrapAsync(async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new BadRequestError(
        errors
          .array()
          .map((error) => error.msg)
          .join(", ")
      );
    }

    const newUser = await userService.addUser(req.body);

    res.status(201).json(newUser);
  })
);

// userRouter.post(
//   "/login",
//   body("email")
//     .isEmail()
//     .normalizeEmail()
//     .withMessage(
//       "올바른 이메일을 입력해주세요, 또한 대문자는 이메일에 포함할 수 없습니다."
//     ),
//   body("password")
//     .isAlphanumeric()
//     .isLength({ min: 4 })
//     .trim()
//     .withMessage("패스워드는 최소 4자리 이상이어야 합니다."),

//   wrapAsync(async (req, res) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       throw new BadRequestError(
//         errors
//           .array()
//           .map((error) => error.msg)
//           .join(", ")
//       );
//     }

//     const userToken = await userService.getUserToken(req.body);

//     res.status(200).json(userToken);
//   })
// );

module.exports = userRouter;
