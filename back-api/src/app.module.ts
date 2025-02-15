import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TicketModule } from './modules/ticket/ticket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Arquivo do banco
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true, // ⚠️ Apenas para desenvolvimento! Em produção, use migrations
    }),
    HealthModule,
    TicketModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
