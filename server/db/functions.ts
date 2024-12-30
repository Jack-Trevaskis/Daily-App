import connection from './connection.ts'
import { Fruit } from '../../models/fruit.ts'
import { Todo } from '../../models/todo.ts'

export async function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}

export async function getAllTodo(db = connection): Promise<Todo[]> {
  return await db('todo').select()
}
 