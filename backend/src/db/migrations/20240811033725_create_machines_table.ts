import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('machines', (table) => {
    table.increments('id');
    table.string('machine_name').notNullable();
    table.string('model_code').notNullable();
    table.string('manufacturer').notNullable();
    table.string('registration_year');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('machines');
}
