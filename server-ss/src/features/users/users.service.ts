import { Users } from './../../database/entities/users.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async oneUser(username: string) {
    return await this.usersRepository.findOne({ username });
  }

  async registerUser(dto) {
    const {
      username,
      firstName,
      lastName,
      activity,
      accountType,
      email,
      password,
    } = dto;

    const user: Users = await this.usersRepository.findOne({ username, email });
    if (user) {
      const userErrors = { username: 'Username and email must be unique!' };
      throw new HttpException(
        { msg: 'Input Data Validation FAILED!', userErrors },
        HttpStatus.BAD_REQUEST,
      );
    }

    // Creating new User
    const newUser: Users = this.usersRepository.create({
      username,
      firstName,
      lastName,
      activity,
      accountType,
      email,
      password,
    });

    // Validate from UserEntity DECORATORS !!!
    const errors = await validate(newUser);

    if (errors.length > 0) {
      const _errors = { username: 'User Input is NOT Valid!' };
      throw new HttpException(
        { msg: 'Input Data Validation FAILED!', _errors },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const savedUser = await this.usersRepository.save(newUser);
      return savedUser;
    }
  }
}
