import { Module } from "@nestjs/common";
import { TicketController } from "./ticket.controller";
import { Ticket } from "./ticket.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TicketsServices } from "src/providers/ticket.service";

@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    providers: [TicketsServices],
    controllers: [TicketController],
})
export class TicketModule{}