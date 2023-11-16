import React from "react";
import { PdfViewer } from "./component/pdf/PdfViewer";

// contains info about Endimension
// contains info about AppFlow
const resumeUrl = "https://maifeeulasad.github.io/assets/resume/maifeeulasad-resume.pdf";

const App = () => {
  return (
      <PdfViewer url={resumeUrl} />
  );
};

export default App;
