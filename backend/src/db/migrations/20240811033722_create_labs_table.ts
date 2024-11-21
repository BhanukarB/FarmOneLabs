import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('labs', (table) => {
    table.increments('id');
    table.string('lab_code').notNullable().unique();
    table.string('lab_name').notNullable();
    table.string('pin_code');
    table.string('state');
    table.string('district');
    table.string('block');
    table.string('panchayat');
    table.string('location');
    table.integer('partner_id').unsigned();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('deleted').defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('labs');
}
