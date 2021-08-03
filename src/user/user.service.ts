import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor( @InjectRepository(User, 'CACC' && 'MC')
    private readonly userRepository: Repository<User>){}


    async getall(){

        return await this.userRepository.find();
    }

}
