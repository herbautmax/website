import puppeteer from 'puppeteer';

async function main() {
  const url = process.env.CV_URL || 'http://localhost:3000/cv?print=1';

  const browser = await puppeteer.launch({
    headless: true, // <-- au lieu de 'new'
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=medium',
    ],
  });

  const page = await browser.newPage();
  await page.emulateMediaType('screen');

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 120_000 });

  await page.pdf({
    path: 'public/cv-maxime-herbaut.pdf',
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log('✅ PDF généré : public/cv-maxime-herbaut.pdf');
}

main().catch((err) => {
  console.error('❌ Erreur génération PDF', err);
  process.exit(1);
});
