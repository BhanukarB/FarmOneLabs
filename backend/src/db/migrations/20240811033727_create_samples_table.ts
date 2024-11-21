import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('samples', (table) => {
    table.increments('id');
    table.integer('lab_id').unsigned().notNullable().unique();
    table.integer('batch_id').unsigned().notNullable().unique();
    table.string('sample_code').notNullable().unique();
    table.integer('machine_id').unsigned().notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.integer('sample_status');
    table.timestamp('collection_at');
    table.timestamp('report_at');
    table.text('comments');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('samples');
}
