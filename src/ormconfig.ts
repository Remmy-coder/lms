// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataSource, DataSourceOptions } = require('typeorm');

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
for (const envName of Object.keys(process.env)) {
  process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
}

export const AppDataSourceOption: typeof DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB,
  entities: [
    'dist/**/*.entity.js',
    'dist/**/entities/*.entity.js',
    'src/**/entities/*.entity.js',
    './build/src/entity/*.js',
  ],
  migrations: ['dist/migrations/*.js'],
};

export const AppDataSource = new DataSource(AppDataSourceOption);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
