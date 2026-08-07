import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import convert from 'heic-convert';

export async function uploadFile(file: File | null): Promise<string | null> {
	if (!file || file.size === 0) return null;

	try {
		let buffer = Buffer.from(await file.arrayBuffer());
		let ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
		let safeName = file.name.replace(/[^a-zA-Z0-9.\-]/g, '').replace(new RegExp(`\\.${ext}$`, 'i'), '');

		// Handle HEIC / HEIF format from iPhone/iPad
		if (ext === 'heic' || ext === 'heif') {
			try {
				const outputBuffer = await convert({
					buffer: buffer,
					format: 'JPEG',
					quality: 0.85
				});
				buffer = Buffer.from(outputBuffer);
				ext = 'jpg';
			} catch (heicErr) {
				console.error('Failed to convert HEIC to JPEG:', heicErr);
			}
		}

		const fileName = `${Date.now()}-${safeName}.${ext}`;
		const uploadDir = join(process.cwd(), 'static', 'uploads');

		// Ensure upload directory exists
		mkdirSync(uploadDir, { recursive: true });

		const filePath = join(uploadDir, fileName);
		writeFileSync(filePath, buffer);

		return `/uploads/${fileName}`;
	} catch (e) {
		console.error('Failed to upload file:', e);
		return null;
	}
}
