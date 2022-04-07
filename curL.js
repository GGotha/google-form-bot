const axios = require("axios");
const qs = require("qs");

const URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdZDiHCztvOE4SOICzZBPAMWfdYnbMm5WVPiHedSjB-6y0Klg/formResponse?entry.1135870437=Op%C3%A7%C3%A3o%204%20%E2%80%93%20Samsung%20versus%20Apple&draftResponse=%5B1,null,%5B%5Bnull,null,%5B%22Op%C3%A7%C3%A3o%204%20%E2%80%93%20Samsung%20versus%20Apple%22%5D,false,null,null,1135870437%5D%5D,null,%5B%22-9015358315957581321%22%5D%5D";

const URLteste =
  "https://docs.google.com/forms/d/e/1FAIpQLScdyjvRkSVja8cuWwFhlg_mc2iz_s6KMkmNFDhC1nz2nSSQfg/formResponse?entry.1100052144=Op%C3%A7%C3%A3o%204%20%E2%80%93%20Samsung%20versus%20Apple&draftResponse=%5B1,null,%5B%5Bnull,null,%5B%22Op%C3%A7%C3%A3o%204%20%E2%80%93%20Samsung%20versus%20Apple%22%5D,false,null,null,1135870437%5D%5D,null,%5B%22-9015358315957581321%22%5D%5D";

// for (i = 0; i < 100; i++) {
// while (1 == 1) {
axios.post(URLteste).then((data) => {
  console.log("requisição::");
});
// }

// }

// axios
//   .post(
//     URL,
//     qs.stringify({
//       "entry.1100052144": "Opção 4 – Samsung versus Apple",
//       draftResponse,
//     })
//   )
//   .then(() => {
//     console.log("foi");
//   });

// async function main() {
//   return await axios.post(
// URL,
// qs.stringify({
//   "entry.1100052144": "Opção 4 – Samsung versus Apple",
//   draftResponse,
// })
//   );
// }

// main().then((response) => {
//   console.log("data::", response.data);
// });
