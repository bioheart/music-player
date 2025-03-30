import fs from 'fs';
import path from 'path';
import { json } from '@sveltejs/kit';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export async function GET() {
  const dirPath = path.resolve('static/couple'); // Path to your images
  try {
    const files = fs.readdirSync(dirPath)
      .filter(file => file.endsWith('.jpg')) // Get only .jpg files
      .map(file => `/couple/${file}`); // Return public URLs
    shuffleArray(files)
    return json(files);
  } catch (error) {
    return json({ error: 'Failed to read images' }, { status: 500 });
  }
}
