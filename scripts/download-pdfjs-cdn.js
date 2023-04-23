const https = require('https');
const fs = require('fs');

const url = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.5.141/pdf.worker.js";
const fileName = "pdf.worker.js";

function downloadFile(url, filename) {
  const file = fs.createWriteStream(filename);
  https.get(url, (response) => {
    response.pipe(file);
  });
  file.on('finish', () => {
    file.close();
  });
}

downloadFile(url, fileName);
