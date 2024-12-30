import { Router } from 'express'

import * as db from '../db/functions.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todo = await db.getAllTodo()

    res.json({todo})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
