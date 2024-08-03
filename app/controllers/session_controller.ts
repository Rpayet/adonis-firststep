import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class SessionController {
    async store({ request }: HttpContext) {
        const { email, password } = request.only(['email', 'password'])

        const user = await User.verifyCredentials(email, password)
        
        /**
         * Now login the user or create a token for them
         */
    }
}
