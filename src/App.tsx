import React from "react";
import { PdfViewer } from "./component/pdf/PdfViewer";

// contains info about Endimension
// contains info about AppFlow
const resumeUrl = "https://cdn.jsdelivr.net/gh/maifeeulasad/resume@main/assets/maifeeulasad-resume.pdf";

const App = () => {
  return (
      <PdfViewer url={resumeUrl} />
  );
};

export default App;
