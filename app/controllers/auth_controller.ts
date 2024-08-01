import type { HttpContext } from '@adonisjs/core/http'
import User from "#models/user"

export default class AuthController {
    public async register({ request, response }: HttpContext) {
        // Register a new user
        const data = request.only(['email', 'username', 'password'])
        const user = await User.create(data)
        return response.created(user)
    }

    public async login({ auth, request, response }: HttpContext) {
        // Login the user
        const { email, password } = request.only(['email', 'password'])
        try {
            const token = await auth.use('api').attempt(email, password)
            return token.toJSON()
        } catch {
            return response.unauthorized('Invalid credentials')
        }
    }
}