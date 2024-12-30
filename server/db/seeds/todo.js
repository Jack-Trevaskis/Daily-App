export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todo').del()

  // Inserts seed entries
  await knex('todo').insert([
    { id: 1, time: '08;00', name: 'Wake Up', description: 'Cold Shower, Beard, Toe', status: 'not done' },
    { id: 2, time: '08;30', name: 'Breakfast', description: 'eggs on toast, check emails, dishes', status: 'not done'},
    { id: 3, time: '9:00', name: 'quick clean', description: 'clothes, rubbish, make bed', status: 'not done'},
  ])
}
