import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}


    @Get()
    async getAll(){
        const user = await this.userService.getall()
        return {
            Message: 'Lista',
            user
        }
    }
}
