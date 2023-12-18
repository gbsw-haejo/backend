import jwtHelper from "../utils/jwtHelper";
import { UserEntity } from "../entities";
import UserRepository from "../repositories/UserRepository";
import cryptoHelper from "../utils/cryptoHelper";


export default class UserService {
  private repository  = new UserRepository();

  // async getUserByUserId(userId: string): Promise<UsersEntity | null> {
  //   return this.repository.findOneByUserId(userId);
  // }

  async register(data: {
    userId: string,
    email: string,
    password: string,
    name: string,
    birthdate: Date,
  }): Promise<void> {
    const salt = cryptoHelper.generateSalt();
    data.password = cryptoHelper.hashPassword(data.password, salt);
    this.repository.createUser({ ...data, salt });
  }

  async login(userId: string, password: string): Promise<string> {
    const user = await this.repository.findOneByUserId(userId);
    if(!user) throw new Error('아이디 또는 비밀번호가 일치하지 않습니다');

    const isValidPassword = user.password === cryptoHelper.hashPassword(password, user.salt);
    if(!isValidPassword) throw new Error('아이디 또는 비밀번호가 일치하지 않습니다');

    const token = jwtHelper.sign(user);
    return token;
  }
}