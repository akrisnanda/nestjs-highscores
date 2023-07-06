import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = unknown;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'andry',
      password: 'admin',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return await this.users.find(user => user.username === username);
  }
}