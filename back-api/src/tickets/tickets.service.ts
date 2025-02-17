import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }

  findAll() {
    // return `This action returns all tickets`;
    const tickets = [
      { id: 1, bookingCode: "2025ABAUE", title: "Problema com Wi-Fi", status: "Aberto" },
      { id: 2, bookingCode: "2025YNBRB", title: "Ar-condicionado não funciona", status: "Em andamento" },
      { id: 3, bookingCode: "2025ABAUE", title: "Problema com Wi-Fi", status: "Novo" },
    ];
    return tickets;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
