import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, beforeSave, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email', 'username'],
  passwordColumnName: 'password',
})

/**
 * Represents a User model.
 */
export default class User extends compose(BaseModel, AuthFinder) {
  /**
   * The unique identifier for the user.
   */
  @column({ isPrimary: true })
  declare id: number

  /**
   * The email address of the user.
   */
  @column()
  declare email: string

  /**
   * The username of the user.
   */
  @column()
  declare username: string

  /**
   * The password of the user.
   */
  @column({ serializeAs: null })
  declare password: string

  /**
   * The timestamp when the user was created.
   */
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  /**
   * The timestamp when the user was last updated.
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  /**
   * The access tokens associated with the user.
   */
  static accessTokens = DbAccessTokensProvider.forModel(User)

  /**
   * Hashes the user's password before saving.
   * @param user - The user instance.
   */
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
}