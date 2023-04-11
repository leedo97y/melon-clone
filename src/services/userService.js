import { userModel } from "../db/models/userModel";
// import { BadRequestError } from "../../utils/reqError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async addUser(userInfo) {
    const { email, password, nickname } = userInfo;

    const user = await this.userModel.findByEmail(email);

    if (user) {
      alert("이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.");
      throw new BadRequestError(
        "이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요."
      );
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUserInfo = {
      email,
      password: hashedPassword,
      nickname,
    };

    return await this.userModel.create(newUserInfo);
  }

  async getUserToken(loginInfo) {
    const { email, password } = loginInfo;

    const user = await this.userModel.findByEmail(email);

    if (!user) {
      alert("해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
      throw new BadRequestError(
        "해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요."
      );
    }

    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      alert("비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.");
      throw new BadRequestError(
        "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
      );
    }

    const secretKey = process.env.JWT_SECRET_KEY || "secret-key";
    const token = jwt.sign({ userId: user._id }, secretKey);

    return { token };
  }

  async getUserInfo(userId) {
    return await this.userModel.findById(userId);
  }

  async getUsers() {
    return await this.userModel.findAll();
  }

  async setUser(userInfoRequired, toUpdate) {
    const { userId, currentPassword } = userInfoRequired;

    let user = await this.userModel.findById(userId);

    if (!user) {
      alert("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
      throw new BadRequestError(
        "가입 내역이 없습니다. 다시 한 번 확인해 주세요."
      );
    }

    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      alert("현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.");
      throw new BadRequestError(
        "현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
      );
    }

    const { password } = toUpdate;

    if (password) {
      const newPasswordHash = await bcrypt.hash(password, 10);
      toUpdate.password = newPasswordHash;
    }

    return await this.userModel.update({ userId, update: toUpdate });
  }

  async withdraw(userId) {
    const user = await userModel.findById(userId);

    if (!user) {
      alert("가입 내역이 없습니다. 다시 한 번 확인해 주세요.");
      throw new BadRequestError(
        "가입 내역이 없습니다. 다시 한 번 확인해 주세요."
      );
    }

    return await this.userModel.deleteUser(userId);
  }
}

const userService = new UserService(userModel);

export { userService };
