import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('operator_equipment_rate_history'))) {
    await knex.schema.createTable('operator_equipment_rate_history', (table) => {
      table.increments('id');
      table.integer('operator_equipment_id').notNullable();
      table.integer('hourly_rate').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
      table.integer('is_active').defaultTo(1);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  if (await knex.schema.hasTable('operator_equipment_rate_history')) {
    await knex.schema.dropTable('operator_equipment_rate_history');
  }
}

