const fs = require('fs');
const { execSync } = require('child_process');

try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp...');
  execSync('npm i --no-save sharp', { stdio: 'inherit' });
}

const sharp = require('sharp');
const inputPath = 'public/logo-oficial.png';

async function generateIcons() {
  try {
    if (!fs.existsSync(inputPath)) {
      console.log('Logo source not found at ' + inputPath);
      return;
    }

    await sharp(inputPath)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile('app/icon.png');
    console.log('Generated app/icon.png');

    await sharp(inputPath)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .toFile('app/apple-icon.png');
    console.log('Generated app/apple-icon.png');
    
    // Attempt to remove existing favicon.ico to let Next.js use icon.png instead
    if (fs.existsSync('app/favicon.ico')) {
      fs.unlinkSync('app/favicon.ico');
      console.log('Removed old app/favicon.ico');
    }

  } catch (err) {
    console.error('Error generating icons:', err);
  }
}
generateIcons();
