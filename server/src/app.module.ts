import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GetDataModule } from './get-data/get-data.module';

@Module({
  imports: [ConfigModule.forRoot(), GetDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
