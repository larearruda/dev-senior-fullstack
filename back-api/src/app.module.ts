import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { BookingsModule } from './bookings/bookings.module';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Arquivo do banco
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Apenas para desenvolvimento! Em produção, use migrations
      logging: true,
    }),
    HealthModule,
    BookingsModule,
    TicketsModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
