const test = require("./pdfextract.js");

const getCliftonStrengthsReportData = async () => {
  const pdfData = await test.readPdf("./rapport.pdf");

  //generateTalentProfileData(pdfData[0]);
  generateStrengthsInsightsData(pdfData[2]);
};

const generateTalentProfileData = (page) => {
  // Views the content on the first page of the PDF. In this page you can find content about your own top 34 Strengths
  // which could eventually be used as input to automatize profile uploading in Forte.
  readPageContent(page.content);
};

const generateStrengthsInsightsData = (page) => {
  // From page 3 onwards you can find personal insights about your top 5 in the PDF. These insights usually (always?)
  // receive extra padding which positions them at the x coordinate of 72.3. This value is used to extract insights data
  readPageContent(page.content);

  //pdfPage[i]["x"] === 72.3 && console.log(pdfPage[i]["str"]);
};

const readPageContent = (content) => {
  // Reads each line of the page and extracts the string content
  /*  Keys of the content object
        x,y = coordinates
        dir = always ltr apparently :)
        str = string content
        width = amount of width space it takes in the pdf
        height = amount of height space it takes in the pdf, fontsize?
        fontName = fontname
    */

  for (let i in content) {
    let extractedString = content[i];
    console.log(extractedString["str"]);
  }
};

getCliftonStrengthsReportData();