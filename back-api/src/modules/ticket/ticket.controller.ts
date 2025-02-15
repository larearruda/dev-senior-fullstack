import { Controller, Get, HttpCode } from '@nestjs/common';
import { Ticket } from './ticket.entity';

@Controller('ticket')
export class TicketController {
    
    @Get()
    @HttpCode(200)
    ticket(): Ticket[] {
        let allTickets: Ticket[] = [
            { id: 1, bookingCode: "", status: "", title: "" }
        ];
        
        return allTickets;
    }
}