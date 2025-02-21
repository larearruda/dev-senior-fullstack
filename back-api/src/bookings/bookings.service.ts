import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking) private bookingsRepository: Repository<Booking>,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const newBooking = this.bookingsRepository.create(createBookingDto);
    return await this.bookingsRepository.save(newBooking);
  }

  findAll() {
    const bookings = this.bookingsRepository.find();
    return bookings;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  findByCustomerId(customerId: string) {
    // return `This action returns all bookings made from user #${id}`;
    const bookingsByUserId = this.bookingsRepository
      .createQueryBuilder('booking')
      .where('booking.customerId = :customerId', { customerId: customerId })
      .getMany();
    return bookingsByUserId;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
