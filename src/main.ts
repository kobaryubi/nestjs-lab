import { NestFactory } from "@nestjs/core";

const bootstrap = async () => {
  const app = await NestFactory.create()
  await app.listen(3000)
}

bootstrap();
