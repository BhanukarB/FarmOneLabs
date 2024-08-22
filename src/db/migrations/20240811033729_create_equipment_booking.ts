import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('equipment_booking'))) {
    await knex.schema.createTable('equipment_booking', (table) => {
      table.increments('id');
      table.string('booking_code').notNullable().unique();
      table.string('user_id').notNullable();
      table.integer('operator_id').unsigned();
      table.integer('operator_equipment_id').notNullable();
      table.string('booking_location').notNullable();
      table.string('booking_location_pincode').notNullable();
      table.integer('per_hour_rate').notNullable();
      table.timestamp('booking_date').notNullable();
      table.timestamp('operation_start_time').defaultTo(null);
      table.timestamp('operation_end_time').defaultTo(null);
      table.integer('status').defaultTo(0); // 0 => Pending, 1 => Accepted, 2 => Cancelled,3 => In_Progress, 4 => Completed
      table.text('otp').defaultTo(null);
      table.integer('net_amount').defaultTo(null);
      table.text('user_remarks').defaultTo(null);
      table.text('operator_remarks').defaultTo(null);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
      table.integer('deleted').defaultTo(0);
      table.index('booking_location_pincode');
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  if (await knex.schema.hasTable('equipment_booking')) {
    await knex.schema.dropTable('equipment_booking');
  }
}

