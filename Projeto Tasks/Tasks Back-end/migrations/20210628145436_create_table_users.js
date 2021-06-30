
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();//cria um campo auto incrementavel chamado id sendo primary key
        table.string('name').notNull();//cria um campo do tipo string chamado name nao podendo ser null
        table.string('email').notNull().unique();//cria um campo do tipo string chamado email nao podendo ser null
        table.string('password').notNull();//cria um campo do tipo string chamado password nao podendo ser null
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
