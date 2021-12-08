import {Router} from 'express'


import {showUserPage} from '../services/user.service.js'

const router = Router()

router.route('/').get( showUserPage)

export default router;
