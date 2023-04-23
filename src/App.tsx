import React from "react";
import { PdfViewer } from "./component/pdf/PdfViewer";

// const resumeUrl = "https://maifeeulasad.github.io/assets/resume/resume_maifeeulasad.pdf";
// contains info about Endimension
// contains info about AppFlow
const resumeUrl = "https://maifeeulasad.github.io/assets/resume/Maifee%20Ul%20Asad%20-%20Resume%20-%202023.02.02.pdf";

const App = () => {
  return (
      <PdfViewer url={resumeUrl} />
  );
};

export default App;
