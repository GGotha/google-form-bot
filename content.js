const puppeteer = require("puppeteer");

const OPTION_NUMBER = 4;
const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdZDiHCztvOE4SOICzZBPAMWfdYnbMm5WVPiHedSjB-6y0Klg/viewform";

class Content {
  async start() {
    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(0);

    var contador = 0;

    await page.goto(FORM_LINK, {
      waitUntil: "networkidle0",
    });

    while (1 === 1) {
      try {
        if (
          (await page.waitForSelector("span.aDTYNe")) &&
          (await page.waitForSelector("span.NPEfkd"))
        ) {
          const options = await page.$$("span.aDTYNe");
          options[OPTION_NUMBER - 1].click();

          const button = await page.$$("span.NPEfkd");
          button[0].click();
        }

        if (await page.waitForSelector("div.pdLVYe")) {
          await page.goto(FORM_LINK, {
            waitUntil: "networkidle0",
          });
        }
        contador++;
        console.log("VOTO COMPUTADO::", contador);
      } catch (err) {
        console.log("Erro - Redirecionando você para a página inicial");

        await page.goto(FORM_LINK, {
          waitUntil: "networkidle0",
        });
      }
    }
  }
}

module.exports = new Content();
