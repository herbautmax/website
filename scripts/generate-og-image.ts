import puppeteer from 'puppeteer';

// Génère public/og-image.png (1200×630) — carte de partage social.
// Visuel typographique aux tokens « Émeraude » (cf. tailwind.config.js).
// Texte centralisé ici car purement décoratif (pas réutilisé ailleurs).

const html = /* html */ `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;700;800&family=Space+Grotesk:wght@500;600&display=swap" rel="stylesheet" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; }
  body {
    font-family: 'Schibsted Grotesk', system-ui, sans-serif;
    background: #181B1F;
    color: #F3F5F4;
    position: relative;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  /* Glow émeraude diffus, côté droit */
  .glow {
    position: absolute; inset: 0;
    background: radial-gradient(120% 100% at 100% 50%, rgba(18,185,129,0.18) 0%, rgba(18,185,129,0.04) 38%, rgba(24,27,31,0) 62%);
  }
  /* Grille subtile */
  .grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(90% 90% at 70% 55%, #000 0%, transparent 65%);
    -webkit-mask-image: radial-gradient(90% 90% at 70% 55%, #000 0%, transparent 65%);
  }
  .frame {
    position: relative;
    width: 100%; height: 100%;
    padding: 72px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  /* En-tête : monogramme + nom */
  .brand { display: flex; align-items: center; gap: 18px; }
  .mark {
    width: 64px; height: 64px;
    border-radius: 16px;
    background: #12B981;
    color: #04150E;
    font-weight: 800;
    font-size: 26px;
    letter-spacing: -0.04em;
    display: flex; align-items: center; justify-content: center;
  }
  .brand-name { font-size: 30px; font-weight: 700; letter-spacing: -0.02em; }

  /* Bloc central */
  .eyebrow {
    display: flex; align-items: center; gap: 16px;
    font-family: 'Space Grotesk', monospace;
    font-weight: 600;
    font-size: 21px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #12B981;
    margin-bottom: 22px;
  }
  .eyebrow .dash { width: 38px; height: 3px; background: #12B981; border-radius: 2px; }
  .headline {
    font-size: 86px;
    font-weight: 800;
    line-height: 1.02;
    letter-spacing: -0.04em;
    max-width: 1000px;
  }
  .headline .accent { color: #12B981; }

  /* Pied : domaine + clients */
  .footer {
    display: flex; align-items: center; justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 26px;
  }
  .domain { font-size: 22px; color: #9AA1AB; letter-spacing: -0.01em; }
  .clients { display: flex; align-items: center; gap: 18px; font-size: 22px; font-weight: 500; color: #C7CCD2; }
  .clients .dot { width: 4px; height: 4px; border-radius: 50%; background: #12B981; }
</style>
</head>
<body>
  <div class="glow"></div>
  <div class="grid"></div>
  <div class="frame">
    <div class="brand">
      <div class="mark">MH</div>
      <div class="brand-name">Maxime Herbaut</div>
    </div>

    <div class="center">
      <div class="eyebrow"><span class="dash"></span>Product Manager · Product Builder</div>
      <div class="headline">Concevoir, créer &amp; lancer des produits qui <span class="accent">comptent</span>.</div>
    </div>

    <div class="footer">
      <div class="domain">maximeherbaut.com</div>
      <div class="clients">
        <span>Sergic</span><span class="dot"></span>
        <span>Roquette</span><span class="dot"></span>
        <span>Norauto</span>
      </div>
    </div>
  </div>
</body>
</html>`;

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=medium'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 60_000 });
  await page.evaluateHandle('document.fonts.ready');

  await page.screenshot({
    path: 'public/og-image.png',
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });

  await browser.close();
  console.log('✅ OG image générée : public/og-image.png');
}

main().catch((err) => {
  console.error('❌ Erreur génération OG image', err);
  process.exit(1);
});
