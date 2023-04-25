import express from "express";
import jwt from "jsonwebtoken";
import { userService } from "../services/userService";
import { body, validationResult } from "express-validator";

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

/**
 * 회원가입 페이지에서만 오류가 발생하지 않아,
 * 이 페이지를 수정하여 로그인 페이지로 만들었다.
 * 따라서, /register 용 post가 맞음.
 */

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
  // body("nickname")
  //   .isString()
  //   .isLength({ min: 2 })
  //   .trim()
  //   .withMessage("성함은 최소 2자리 이상이어야 합니다."),

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

    const userToken = await userService.getUserToken(req.body);

    res.status(201).json(userToken);
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
//     console.log(req.body);
//     const userToken = await userService.getUserToken(req.body);

//     res.status(200).json(userToken);
//   })
// );

// function loginRequired(req, res, next) {
//   const userToken = req.headers["authorization"]?.split(" ")[1];

//   if (!userToken) {
//     return next(
//       new UnauthorizedError("로그인한 유저만 사용할 수 있는 서비스입니다.")
//     );
//   }

//   try {
//     const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
//     const jwtDecoded = jwt.verify(userToken, secretKey);
//     req.currentUserId = jwtDecoded.userId;

//     next();
//   } catch (error) {
//     return next(new UnauthorizedError("정상적인 토큰이 아닙니다."));
//   }
// }

// userRouter.get(
//   "/users/userInfo",
//   loginRequired,
//   wrapAsync(async (req, res) => {
//     const userInfo = await userService.getUserInfo(req.currentUserId);

//     res.status(200).json(userInfo);
//   })
// );

export default userRouter;
