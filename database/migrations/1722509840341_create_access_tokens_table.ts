import { BaseSchema } from '@adonisjs/lucid/schema'

/**
 * Represents a migration to create the 'auth_access_tokens' table.
 */
export default class extends BaseSchema {
  protected tableName = 'auth_access_tokens'

  /**
   * Creates the 'auth_access_tokens' table.
   */
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('tokenable_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table.string('type').notNullable()
      table.string('name').nullable()
      table.string('hash').notNullable()
      table.text('abilities').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.timestamp('last_used_at').nullable()
      table.timestamp('expires_at').nullable()
    })
  }

  /**
   * Drops the 'auth_access_tokens' table.
   */
  async down() {
    this.schema.dropTable(this.tableName)
  }
}