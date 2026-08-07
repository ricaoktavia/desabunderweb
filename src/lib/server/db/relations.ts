import { relations } from "drizzle-orm/relations";
import { users, berita, pengumuman } from "./schema";

export const beritaRelations = relations(berita, ({one}) => ({
	user: one(users, {
		fields: [berita.authorId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	beritas: many(berita),
	pengumumen: many(pengumuman),
}));

export const pengumumanRelations = relations(pengumuman, ({one}) => ({
	user: one(users, {
		fields: [pengumuman.authorId],
		references: [users.id]
	}),
}));