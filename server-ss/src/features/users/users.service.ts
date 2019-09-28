import { Users } from './../../database/entities/users.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Posts } from '../../database/entities/posts.entity';

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
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
    newUser.post = Promise.resolve([]);

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

  // async getPosts(postId: string) {
  //   const post = await this.postsRepository.findOne({ where: { id: postId } });
  //   return post;
  // }

  async getAllPosts(userId: string) {
    const post = await this.postsRepository.find({
      where: { user: userId },
    });
    return post;
  }

  async getAllUsersPosts() {
    const post = await this.postsRepository.find();
    console.log(post);
    return post;
  }

  async createPost(userId, postData) {
    console.log(userId);
    const { title, description, photoUrl } = postData;
    const foundUser = await this.usersRepository.findOne({
      where: { id: userId },
    });
    const newPost = this.postsRepository.create({
      title,
      description,
      photoUrl,
    });

    const userIds = await foundUser.post;
    userIds.push(newPost);

    const savedPost = await this.postsRepository.save(newPost);
    const savedUser = await this.usersRepository.save(foundUser);

    return savedPost;
  }
}
