import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import knexConnection from '../../db/connector/knex';
import { EquipmentBookingDto } from './dto/equipment-booking.dto';

@Injectable()
export class EquipmentBookingRepository {
  constructor() { }

  // Create a new booking
  async createBooking(data: EquipmentBookingDto): Promise<EquipmentBookingDto> {
    try {
      const [booking] = await knexConnection('equipment_booking')
        .insert(data)
        .returning('*');
      return booking;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  // Get booking by ID
  async getBookingById(id: number): Promise<EquipmentBookingDto | null> {
    try {
      const booking = await knexConnection('equipment_booking as eb')
        .innerJoin('operator_equipment as oeq', 'oeq.id', 'eb.operator_equipment_id')
        .innerJoin('equipment as eq', 'eq.id', 'oeq.equipment_id')
        .innerJoin('operator as op', 'op.id', 'oeq.operator_id')
        .innerJoin('users as u1', 'u1.id', 'eb.user_id')
        .innerJoin('users as u2', 'u2.id', 'op.user_id')
        .where('eb.id', id)
        .andWhere('eb.deleted', 0)
        .select(`eb.*, 
          u1.name as user_name, 
          u2.name as operator_name,
          oeq.equipment_id, 
          eq.name, 
          eq.image, 
          eq.model`)
        .first();
      return booking || null;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  // Get all bookings for a user
  async getAllBookingsForUser(userId: number, status?: number): Promise<EquipmentBookingDto[]> {
    try {
      const bookingsQuery = knexConnection('equipment_booking')
        .select('*')
        .where({ user_id: userId, deleted: 0 });
  
      if (status) {
        bookingsQuery.andWhere({ status: status });
      }
  
      const bookings = await bookingsQuery;
      return bookings;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
  

  // Update booking status
  async updateBookingStatus(id: number, status: number): Promise<EquipmentBookingDto | null> {
    try {
      const [updatedBooking] = await knexConnection('equipment_booking')
        .where({ id })
        .update({ status, updated_at: knexConnection.fn.now() })
        .returning('*');
      if (!updatedBooking) {
        throw new NotFoundException(`Booking with ID ${id} not found`);
      }
      return updatedBooking;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  // Soft delete a booking
  async deleteBooking(id: number): Promise<void> {
    try {
      const rowsAffected = await knexConnection('equipment_booking')
        .where({ id })
        .update({ deleted: 1, updated_at: knexConnection.fn.now() });
      if (rowsAffected === 0) {
        throw new NotFoundException(`Booking with ID ${id} not found`);
      }
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
