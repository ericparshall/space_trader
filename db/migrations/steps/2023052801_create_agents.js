module.exports = {
  run: (db) => db.query("create table IF NOT EXISTS public.agents\n" +
    "(\n" +
    "    id               integer generated always as identity,\n" +
    "    call_sign        varchar,\n" +
    "    faction_id       integer,\n" +
    "    token            text,\n" +
    "    account_id       varchar,\n" +
    "    symbol           varchar,\n" +
    "    headquarters     varchar,\n" +
    "    credits          bigint,\n" +
    "    starting_faction varchar\n" +
    ");\n", [])
}