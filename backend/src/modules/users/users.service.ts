import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { UserDto, CreateUserDto } from './dto/user.dto';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserDto> {
    try {
      const { name, email, state, district, address, password } = createUserDto;

      // Hash the password before saving
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      return this.userRepository.createUser({
        name,
        email,
        password: hashedPassword,
        state,
        district,
        address,
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async findUserById(id: number): Promise<UserDto | null> {
    try {
      const user = await this.userRepository.findUserById(id);
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async findAllUsers(): Promise<UserDto[]> {
    try {
      return this.userRepository.findAllUsers();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async updateUser(id: number, UserDto: UserDto): Promise<UserDto> {
    try {
      const existingUser = await this.findUserById(id);
      if (!existingUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      const { name, email, state, district, address } = UserDto;
      return this.userRepository.updateUser(id, {
        name,
        email,
        state,
        district,
        address,
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async deleteUser(id: number): Promise<UserDto> {
    try {
      const existingUser = await this.findUserById(id);
      if (!existingUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return this.userRepository.deleteUser(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async findUserByEmail(email: string): Promise<UserDto | null> {
    try {
      const user = await this.userRepository.findUserByEmail(email);
      if (!user) {
        throw new NotFoundException(`User with email ${email} not found`);
      }
      return user;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
