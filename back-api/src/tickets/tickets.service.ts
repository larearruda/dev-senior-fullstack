import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const newTicket = this.ticketsRepository.create(createTicketDto); // Criar a entidade com os dados do DTO
    return await this.ticketsRepository.save(newTicket); // Salvar no banco
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  findAll() {
    const tickets = this.ticketsRepository.find();
    return tickets;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
