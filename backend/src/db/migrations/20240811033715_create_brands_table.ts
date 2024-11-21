import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('brands', (table) => {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.text('logo').notNullable();
    table.string('country', 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('brands');
}
