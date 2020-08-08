import knex from 'knex';

export async function up(knex: knex) { //cria
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        //relacionamento ao buscar o professor de determinada matéria, gera um chave estrangeira
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        //onDelete, CASCADE-caso o professor seja deletado da plataforma, todas as materias q ele dava somem.
        //onUpdate, CASCADE-caso ocorra alguma alteração em alguma informação, 
        //ele atualiza sozinho todos os lugares onde é necessário
    }) 
}


export async function down(knex: knex) { //rollback
    return knex.schema.dropTable('classes');
}