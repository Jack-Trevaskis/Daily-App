import request from 'superagent'
import { Todo } from '../../models/todo'

export async function getTodo() {
    const response = await request.get('/api/v1/todo')
  
    return response.body as Todo[]
  }