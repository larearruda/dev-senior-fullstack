import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa a validação dos DTOs globalmente
  app.useGlobalPipes(new ValidationPipe());

  //permitindo que o front q tá rodando em localhost possa acessar
  app.enableCors({ origin: 'http://localhost:3000' });

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
