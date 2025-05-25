import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    @MessagePattern('get_users')
    getUsers(id: number) {
        return { id, name: "Jonh Doe" };
    }
}
