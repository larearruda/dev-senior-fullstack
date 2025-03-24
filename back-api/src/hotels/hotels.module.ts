import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { Hotel } from './entities/hotel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  imports: [TypeOrmModule.forFeature([Hotel])],
})
export class HotelsModule {}
