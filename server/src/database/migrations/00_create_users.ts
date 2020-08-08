import knex from 'knex';

export async function up(knex: knex) { //cria
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

export async function down(knex: knex) { //rollback
    return knex.schema.dropTable('users');
}