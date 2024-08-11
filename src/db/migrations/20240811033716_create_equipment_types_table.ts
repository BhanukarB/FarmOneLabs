import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('equipment_types', (table) => {
    table.increments('id');
    table.string('equipment_type', 255).notNullable();
    table.string('symbol_image', 255).notNullable();
    table.text('utility').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('equipment_types');
}
