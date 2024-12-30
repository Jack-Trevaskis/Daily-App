import { useQuery } from '@tanstack/react-query'
import * as API from '../apis/todo'

export function useTodo() {
    return useQuery({
      queryKey: ['todo'],
      queryFn: async () => API.getTodo(),
    })
  }
  