import express from 'express'
import { Home, Profile } from '../controllers/userController.js'

const router = express.Router()

router.get('/', Home)
router.get('/profile', Profile)

export default router
