import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserEntity } from '../entities';

const sign = (user: UserEntity): string => {
  const payload = {
    id: user.userId,
    // 메일 검사 여부
  };

  const JWT_SECRET = "123"
  const token = jwt.sign(payload, JWT_SECRET, {
    algorithm: "HS256",
    expiresIn: "180m",
    issuer: "issuer",
  })

  return token;
}

const verify = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, '123') as JwtPayload;
  } catch(err) {
    throw new Error('jwt 인증 실패');
  }
}

export default {
  sign,
  verify
}