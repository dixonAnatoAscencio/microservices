import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  //la funcion microservice crea un microservicio, no debe usarse para una api 
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP, //capa de transporte 
    options: {
      port: 4002, //puerto de la microservicio
    }
  });
  await app.listen();
  console.log("Product Microservice is running on port 4002");
}
bootstrap();
