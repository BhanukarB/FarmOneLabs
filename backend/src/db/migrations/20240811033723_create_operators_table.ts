import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('operators', (table) => {
    table.increments('id');
    table.integer('user_id').unsigned().notNullable().unique();
    table.string('operator_code').notNullable().unique();
    table.string('licence_code').unique();
    table.integer('partner_id').unsigned();
    table.integer('created_by').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.integer('deleted').defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('operators');
}
