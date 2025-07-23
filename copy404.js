import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const source = `${__dirname}/404.html`;
const destination = `${__dirname}/dist/404.html`;

try {
  await fs.copyFile(source, destination);
  console.log('✅ 404.html copied to dist folder.');
} catch (err) {
  console.error('❌ Failed to copy 404.html:', err);
  process.exit(1);
}
