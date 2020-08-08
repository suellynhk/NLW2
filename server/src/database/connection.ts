import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true, //qndo n conseguir definir um valor padrão pra um campo no bd. define como nulo
}) 

export default db; 