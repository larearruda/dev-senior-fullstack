import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { BookingsModule } from './bookings/bookings.module';
import { TicketsModule } from './tickets/tickets.module';
import { ChatGateway } from './chat.gateway';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { HotelsModule } from './hotels/hotels.module';

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
    CustomersModule,
    UsersModule,
    HotelsModule,
  ],
  providers: [ChatGateway],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
