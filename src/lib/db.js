import Database from "better-sqlite3";
import { join } from "node:path";

// process.cwd() cible toujours la racine du projet
const dbPath = join(process.cwd(), "data/clients.db");

const db = new Database(dbPath);

export function getClients() {
  return db.prepare(`
    SELECT
      id,
      name,
      email,
      address,
      latitude,
      longitude
    FROM clients
    ORDER BY name
  `).all();
}