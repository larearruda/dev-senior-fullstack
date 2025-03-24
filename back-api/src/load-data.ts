
import * as fs from 'fs';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { Customer } from './customers/entities/customer.entity';
import { Hotel } from './hotels/entities/hotel.entity';
import { Booking } from './bookings/entities/booking.entity';
import { Ticket } from './tickets/entities/ticket.entity';
import { AppModule } from './app.module';

const entities = {
  customers: Customer,
  hotels: Hotel,
  bookings: Booking,
  tickets: Ticket,
};

async function loadData() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const dataSource = app.get(DataSource);
  
    console.log('📊 Iniciando carregamento dos dados...');
  
    const entities = {
      customers: Customer,
      hotels: Hotel,
      bookings: Booking,
      tickets: Ticket,
    };
  
    const jsonPath = path.join(__dirname, './utils/json-mocks');
    console.log('caminho atual', jsonPath)
    const files = fs.readdirSync(jsonPath);
  
    for (const file of files) {
      const fileName = path.basename(file, '.json');
      const entity = entities[fileName as keyof typeof entities];
  
      if (!entity) {
        console.warn(`⚠️ Nenhuma entidade corresponde ao arquivo: ${file}`);
        continue;
      }
  
      const fileData = JSON.parse(fs.readFileSync(path.join(jsonPath, file), 'utf8'));
      const repo = dataSource.getRepository(entity);
  
      for (const record of fileData) {
    //     let existingRecord;
  
    //     if (entity === Customer) {
    //       existingRecord = await repo.findOneBy({ email: record.email });
    //     } else if (entity === Hotel) {
    //       existingRecord = await repo.findOneBy({ name: record.name });
    //     } else if (entity === Booking) {
    //       existingRecord = await repo.findOneBy({ bookingCode: record.bookingCode });
    //     } else if (entity === Ticket) {
    //       existingRecord = await repo.findOneBy({
    //         bookingCode: record.bookingCode,
    //         title: record.title,
    //       });
    //     }
  
    //     if (!existingRecord) {
          await repo.save(record);
          // console.log(`✅ Registro inserido em ${fileName}:`, record);
      }
    }
  
    // console.log('🚀 Carregamento concluído com sucesso!');
    await app.close();
  }
  
  loadData().catch((err) => {
    console.error('❌ Erro ao carregar dados:', err);
  });
