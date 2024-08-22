import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('operator_equipment', (table) => {
    table.increments('id');
    table.integer('user_id').unsigned().notNullable();
    table.integer('equipment_id').unsigned().notNullable();
    table.string('equipment_reg_number', 255).notNullable();
    table.string('equipment_reg_year', 255).notNullable();
    table.string('equipment_reg_location', 255).notNullable();
    table.string('state', 255).notNullable();
    table.string('district', 255).notNullable();
    table.text('equipment_details').notNullable();
    table.text('equipment_image').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('operator_equipment');
}
