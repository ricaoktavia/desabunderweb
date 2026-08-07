import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schemaData from './schema';
import * as relations from './relations';
import { env } from '$env/dynamic/private';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = mysql.createPool(env.DATABASE_URL);
const schema = { ...schemaData, ...relations };

export const db = drizzle(client, { schema, mode: 'default' });
