import { redirect, type Handle } from '@sveltejs/kit';
import { jwtVerify } from 'jose';
import { env } from '$env/dynamic/private';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode(env.JWT_SECRET || 'desabunder-super-secret-key-2026-very-secure');

let isInitialized = false;

// Auto-seed admin user
async function initializeAdmin() {
	if (isInitialized) return;
	
	try {
		const adminExists = await db.query.users.findFirst({
			where: (users, { eq }) => eq(users.username, 'admindesabunder')
		});

		if (!adminExists) {
			console.log('Seeding default admin user...');
			const hashedPassword = await bcrypt.hash('desabunderhebat2026', 10);
			await db.insert(users).values({
				nama: 'Admin Utama',
				username: 'admindesabunder',
				password: hashedPassword,
				role: 'admin'
			});
			console.log('Admin user created successfully');
		}
		isInitialized = true;
	} catch (e) {
		console.error('Failed to initialize admin user:', e);
	}
}

export const handle: Handle = async ({ event, resolve }) => {
	await initializeAdmin();

	const sessionToken = event.cookies.get('admin_session');
	
	if (sessionToken) {
		try {
			const { payload } = await jwtVerify(sessionToken, JWT_SECRET);
			event.locals.user = {
				id: payload.sub as string,
				role: payload.role as string,
				nama: payload.nama as string
			};
		} catch (err) {
			// Invalid or expired token
			event.cookies.delete('admin_session', { path: '/' });
			event.locals.user = undefined;
		}
	} else {
		event.locals.user = undefined;
	}

	// Protected routes
	if (event.url.pathname.startsWith('/admin')) {
		if (!event.locals.user || event.locals.user.role !== 'admin') {
			throw redirect(303, '/login');
		}
	}

	// Redirect logged-in admin away from login page
	if (event.url.pathname === '/login' && event.locals.user?.role === 'admin') {
		throw redirect(303, '/admin');
	}

	return resolve(event);
};
