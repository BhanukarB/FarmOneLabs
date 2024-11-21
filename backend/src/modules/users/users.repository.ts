import { Injectable } from '@nestjs/common';
import knexConnection from '../../db/connector/knex';
import { CreateUserDto, UserDto } from './dto/user.dto';

@Injectable()
export class UserRepository {
  constructor() {}

  async createUser(data: CreateUserDto): Promise<any> {
    const [user] = await knexConnection('users').insert(data).returning('*');
    return user;
  }

  async findUserById(id: number): Promise<any | null> {
    const user = await knexConnection('users').where({ id }).first();
    return user || null;
  }

  async findUserByEmail(email: string): Promise<any | null> {
    const user = await knexConnection('users').where({ email }).first();
    return user || null;
  }

  async findAllUsers(): Promise<UserDto[]> {
    const users = await knexConnection('users').select();
    return users;
  }

  async updateUser(id: number, data: UserDto): Promise<any> {
    const [user] = await knexConnection('users')
      .where({ id })
      .update(data)
      .returning('*');
    return user;
  }

  async deleteUser(id: number): Promise<any> {
    const [user] = await knexConnection('users')
      .where({ id })
      .del()
      .returning('*');
    return user;
  }
}
