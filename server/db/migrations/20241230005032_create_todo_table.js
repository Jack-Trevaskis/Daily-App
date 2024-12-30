export async function up(knex) {
    return knex.schema.createTable('todo', function (table) {
      table.increments('id').primary(); // Auto-incrementing ID
      table.string('name').notNullable(); // Name of the todo
      table.text('description'); // Description of the todo
      table.string('status').defaultTo('not done'); // Status of the todo
      table.time('time'); // Associated time
    });
  };
  
  export async function down(knex) {
    return knex.schema.dropTableIfExists('todo'); // Rollback by dropping the table
  };
  