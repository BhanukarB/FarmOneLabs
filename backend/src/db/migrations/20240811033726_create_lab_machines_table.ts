import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('lab_machines', (table) => {
    table.increments('id');
    table.integer('lab_id').unsigned().notNullable();
    table.integer('machine_id').unsigned().notNullable();
    table.string('machine_code').notNullable().unique();
    table.date('installation_date');
    table.integer('samples_per_day');
    table.integer('deleted').defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('lab_machines');
}
