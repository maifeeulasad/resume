const fs = require('fs');

const sourceFilePath = "pdf.worker.js";
const destinationFilePath = "build/pdf.worker.js";

fs.copyFileSync(sourceFilePath, destinationFilePath);
