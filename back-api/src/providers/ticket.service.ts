
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from 'src/modules/ticket/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsServices {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
  ) {}

  findAll(): Promise<Ticket[]> {
    return this.ticketsRepository.find();
  }

  findOne(id: number): Promise<Ticket | null> {
    return this.ticketsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.ticketsRepository.delete(id);
  }
}
