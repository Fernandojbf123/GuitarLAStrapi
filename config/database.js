module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdujr9g2i3mkk89ollc0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_lj7c'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'jm6Sg45DBEVgLRf3eYH51r3oZrCmcnfv'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
