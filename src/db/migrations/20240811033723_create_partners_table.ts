import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('partners', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('contact_number');
    table.string('email');
    table.string('pin_code');
    table.integer('created_by').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.integer('deleted').defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('partners');
}
