import * as fs from 'fs';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const unlink = promisify(fs.unlink);

export default class FileSystem {
  static async createFile(path: string, content: string): Promise<void> {
    await writeFile(path, content, 'utf-8');
  }

  static async readFile(path: string): Promise<string> {
    return await readFile(path, 'utf-8');
  }

  static async updateFile(path: string, content: string): Promise<void> {
    await this.createFile(path, content);
  }

  static async deleteFile(path: string): Promise<void> {
    await unlink(path);
  }
}