import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('equipment', (table) => {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.text('image').notNullable();
    table.string('model', 255).notNullable();
    table.integer('brand_id').unsigned().notNullable();
    table.float('weight').notNullable();
    table.date('equipment_year').notNullable();
    table.text('description').notNullable();
    table.integer('equipment_type_id').unsigned().notNullable();
    table.float('length').notNullable();
    table.float('breadth').notNullable();
    table.float('height').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('equipment');
}
