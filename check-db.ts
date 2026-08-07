import { db } from './src/lib/server/db/index.js';
import { berita, agenda, pengumuman, umkm } from './src/lib/server/db/schema.js';

async function check() {
	try {
		console.log("Berita: ", await db.select().from(berita));
		console.log("Agenda: ", await db.select().from(agenda));
		console.log("UMKM: ", await db.select().from(umkm));
	} catch (e) {
		console.error(e);
	}
	process.exit(0);
}

check();
