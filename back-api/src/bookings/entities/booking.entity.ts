import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingCode: string;

  @Column()
  customerId: number;

  @Column()
  hotelId: number;

  @Column()
  checkInDate: string;

  @Column()
  checkOutDate: string;

  @Column()
  status: string;

  /*
	customerId (string) → ID do cliente que fez a reserva
	hotelId (string) → ID do hotel onde a reserva foi feita
	roomId (string) → ID do quarto reservado
	checkInDate (Date) → Data de entrada no hotel
	checkOutDate (Date) → Data de saída do hotel
	status (string) → Status da reserva ("pendente", "confirmada", "cancelada", "concluída")
	createdAt (Date) → Data e hora em que a reserva foi criada
	updatedAt (Date) → Data da última atualização 
	 */
}
