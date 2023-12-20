import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  
  //validation
  app.useGlobalPipes(new ValidationPipe());

  // swagger open api
  const config = new DocumentBuilder()
    .setTitle('HRMS portal Demo')
    .addBearerAuth()
    // .addApiKey({ type: 'apiKey', name: 'orgId', in: 'header' }, 'orgId')
    .setDescription('The HRMS portal demo API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
