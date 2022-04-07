const puppeteer = require("puppeteer");

const OPTION_NUMBER = 4;
const DELAY_IN_MILISECONDS = 500;

class Content {
  async start() {
    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();
    await page.goto(
      "https://docs.google.com/forms/d/e/1FAIpQLSdZDiHCztvOE4SOICzZBPAMWfdYnbMm5WVPiHedSjB-6y0Klg/viewform",
      {
        waitUntil: "networkidle0",
      }
    );

   var contador = 0;

    while (1 === 1) {
      try {
        if (
          (await page.waitForSelector("span.aDTYNe")) &&
          (await page.waitForSelector("span.NPEfkd"))
        ) {
          await page.waitForTimeout(DELAY_IN_MILISECONDS);

          const options = await page.$$("span.aDTYNe");
          options[OPTION_NUMBER - 1].click();

          await page.waitForTimeout(DELAY_IN_MILISECONDS);

          const button = await page.$$("span.NPEfkd");
          button[0].click();
        }

        await page.waitForTimeout(DELAY_IN_MILISECONDS + 200);

        await page.goto(
          "https://docs.google.com/forms/d/e/1FAIpQLSdZDiHCztvOE4SOICzZBPAMWfdYnbMm5WVPiHedSjB-6y0Klg/viewform",
          {
            waitUntil: "networkidle0",
          }
        );

	contador++;
        console.log("VOTAÇÃO CONCLUÍDA::", contador);
      } catch (err) {
        console.log("erro");
      }
    }
  }
}

module.exports = new Content();
