const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const inputFile = path.join(process.cwd(), 'public', 'images', 'logo2.png');
  const publicDir = path.join(process.cwd(), 'public');

  // Generate favicon.png (32x32)
  await sharp(inputFile)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .toFormat('png')
    .toFile(path.join(publicDir, 'favicon.png'));

  // Generate favicon-16x16.png
  await sharp(inputFile)
    .resize(16, 16, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .toFormat('png')
    .toFile(path.join(publicDir, 'favicon-16x16.png'));

  // Generate icon.png (192x192 for PWA)
  await sharp(inputFile)
    .resize(192, 192, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .toFile(path.join(publicDir, 'icon.png'));

  // Generate apple-icon.png (180x180)
  await sharp(inputFile)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .toFile(path.join(publicDir, 'apple-icon.png'));

  console.log('Favicon files generated successfully!');
}

generateFavicons().catch(console.error); 