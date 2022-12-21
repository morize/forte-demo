const test = require("./pdfextract.js");

const readPageContent = (content) => {
  // Reads each line of the page and console logs the string content

  let extractedPdfData = [];

  for (let i in content) {
    extractedPdfData.push(content[i]);
    // let extractedString = content[i];
    // console.log(extractedString.str);

    //extractedString["x"] === 72.3 && console.log(extractedString["str"]);
  }

  return extractedPdfData;
};

const generateTalentProfileData = (page) => {
  // Views the content on the first page of the PDF. In this page you can find content about your own top 34 Strengths
  // which could eventually be used as input to automatize profile uploading in Forte.
  const pageContent = readPageContent(page.content);
  // for (let i = 0; i < pageContent.length; i++) {
  //   console.log(pageContent[i].str)
  // }

  pageContent.find((content) => console.log(content));
  // Logic to identify numbers followed by a dot "1." to detect talents
};

const generateStrengthsInsightsData = (page) => {
  // From page 3 onwards you can find personal insights about your top 5 in the PDF. These insights usually (always?)
  // receive extra padding which positions them at the x coordinate of 72.3. This value is used to extract insights data
  readPageContent(page.content);

  //content[i]["x"] === 72.3 && console.log(content[i]["str"]);
};

const getCliftonStrengthsReportData = async () => {
  const pdfData = await test.readPdf("./rapport.pdf");

  generateTalentProfileData(pdfData[0]);
  //generateStrengthsInsightsData(pdfData[2]);
};

getCliftonStrengthsReportData();
