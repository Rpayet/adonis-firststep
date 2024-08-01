import { BaseSchema } from '@adonisjs/lucid/schema'

/**
 * Represents a migration to create the users table.
 */
export default class extends BaseSchema {
  protected tableName = 'users'

  /**
   * Runs the migration to create the users table.
   */
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email', 255).notNullable().unique()
      table.string('username', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.timestamps(true)
    })
  }

  /**
   * Rolls back the migration by dropping the users table.
   */
  async down() {
    this.schema.dropTable(this.tableName)
  }
}