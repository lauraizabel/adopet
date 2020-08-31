import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf").notNullable();
    table.string("adress").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropSchema("users");
}
