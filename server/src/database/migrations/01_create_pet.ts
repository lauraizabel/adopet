import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("pets", (table) => {
    table.increments("id").primary();
    table.string("type").notNullable(); //dog, cat, etc
    table.string("name").notNullable();
    table.integer("age");
    table.string("features").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropSchema("pets");
}
