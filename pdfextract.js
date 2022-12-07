const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();

async function readPdf(path) {
  const options = { };

  return await pdfExtract
    .extract(path, options)
    .then((data) => data.pages)
    .catch((err) => console.log(err));
}

module.exports = { readPdf };
