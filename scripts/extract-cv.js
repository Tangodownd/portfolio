const fs = require('fs');
const path = require('path');

async function main() {
  try {
  // Dynamically import to support ESM/CJS of pdf-parse v2
  const { PDFParse } = await import('pdf-parse');
    const pdfPath = path.resolve(__dirname, '..', 'MiguelTovarDev2025 (3).pdf');
    const dataBuffer = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: dataBuffer });
  const data = await parser.getText();
  await parser.destroy();
    console.log('--- BEGIN_CV_TEXT ---');
    console.log(data.text);
    console.log('--- END_CV_TEXT ---');
  } catch (err) {
    console.error('Failed to extract CV text:', err);
    process.exit(1);
  }
}

main();
