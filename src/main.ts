import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
dotenv.config();

import { AppModule } from './app/app.module';

const bootstrap = async (): Promise<void> => {
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PORT || 3000);
};

bootstrap().then();