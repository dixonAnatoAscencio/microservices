import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES_CLIENT } from 'src/constants';

@Controller('orders')
export class OrdersController {
    constructor(@Inject(MICROSERVICES_CLIENT.ORDERS_SERVICE) private orderServiceClient: ClientProxy) { }

    @Post()
    createOrder(@Body() order: any) {
        return this.orderServiceClient.send('create_order', order);
    }
}
