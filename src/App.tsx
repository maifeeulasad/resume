import React from "react";
import { osCheck, OsType } from "os-check";
import { DesktopResume } from "./component/resume/DesktopResume";
import { MobileResume } from "./component/resume/MobileResume";

// const resumeUrl = "https://maifeeulasad.github.io/assets/resume/resume_maifeeulasad.pdf";
// contains info about Endimension
const resumeUrl =
  "https://maifeeulasad.github.io/assets/resume/Resume-Maifee_Ul_Asad-Single_Page-2022_11_10.pdf";

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
