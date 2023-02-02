import React from "react";
import { osCheck, OsType } from "os-check";
import { DesktopResume } from "./component/resume/DesktopResume";
import { MobileResume } from "./component/resume/MobileResume";

// const resumeUrl = "https://maifeeulasad.github.io/assets/resume/resume_maifeeulasad.pdf";
// contains info about Endimension
// contains info about AppFlow
const resumeUrl =
  "https://maifeeulasad.github.io/assets/resume/Maifee%20Ul%20Asad%20-%20Resume%20-%202023.02.02.pdf";

const App = () => {
  const isDesktop = () => {
    const os = osCheck();

    return os === OsType.Linux || os === OsType.MacOS || os === OsType.Windows;
  };

  if (isDesktop()) {
    return <DesktopResume resumeUrl={resumeUrl} />;
  } else {
    return <MobileResume resumeUrl={resumeUrl} />;
  }
};

export default App;
