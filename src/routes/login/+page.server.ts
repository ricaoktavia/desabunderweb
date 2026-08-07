import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';
import { env } from '$env/dynamic/private';

// In production, this should be a secure random string stored in .env
const JWT_SECRET = new TextEncoder().encode(env.JWT_SECRET || 'desabunder-super-secret-key-2026-very-secure');

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();

		if (!username || !password) {
			return fail(400, { error: 'Username dan password harus diisi' });
		}

		try {
			// Find user in database
			const userRecord = await db.query.users.findFirst({
				where: eq(users.username, username)
			});

			if (!userRecord || !userRecord.password) {
				return fail(401, { error: 'Username atau password salah' });
			}

			// Verify password
			const isPasswordValid = await bcrypt.compare(password, userRecord.password);
			
			if (!isPasswordValid) {
				return fail(401, { error: 'Username atau password salah' });
			}

			// Generate JWT Token
			const token = await new SignJWT({ 
				sub: userRecord.id.toString(), 
				role: userRecord.role,
				nama: userRecord.nama 
			})
				.setProtectedHeader({ alg: 'HS256' })
				.setIssuedAt()
				.setExpirationTime('24h')
				.sign(JWT_SECRET);

			// Set cookie
			cookies.set('admin_session', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 // 24 hours
			});

		} catch (err) {
			console.error('Login error:', err);
			return fail(500, { error: 'Terjadi kesalahan sistem. Silakan coba lagi.' });
		}

		// Redirect on success
		throw redirect(303, '/admin');
	}
} satisfies Actions;
