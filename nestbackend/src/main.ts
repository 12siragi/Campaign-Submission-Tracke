import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();  // Load the environment variables from .env file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;  // Use the PORT from .env or fallback to 3000

  // Enable CORS
  app.enableCors({
    origin: '*',  // Allow all origins (you can restrict this later)
    methods: 'GET,POST,PUT,DELETE',  // Allow specific HTTP methods
    allowedHeaders: 'Content-Type, Accept',  // Allow specific headers
  });

  await app.listen(port);
  console.log(`App listening on port ${port}`);
}
bootstrap();
