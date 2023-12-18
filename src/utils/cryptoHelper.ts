import * as crypto from 'crypto'; 

const generateSalt = (length: number = 8): string => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

const hashPassword = (password: string, salt: string): string => {
  return crypto.createHmac('sha256', salt).update(password).digest('hex');
}

export default {
  generateSalt,
  hashPassword
}