const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();

const readPdf = async (path) => {
  const options = {  };

  return await pdfExtract
    .extract(path, options)
    .then((data) => data.pages)
    .catch((err) => console.log(err));
};

module.exports = { readPdf };
