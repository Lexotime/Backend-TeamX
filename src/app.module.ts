import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://alex:welcometo@cluster0.88b2m.mongodb.net/teamx?retryWrites=true&w=majority'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
