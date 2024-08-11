import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('role_permissions', (table) => {
    table.increments('id');
    table.integer('role_id').unsigned().notNullable();
    table.integer('permission_id').unsigned().notNullable();
    table.unique(['role_id', 'permission_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('role_permissions');
}
