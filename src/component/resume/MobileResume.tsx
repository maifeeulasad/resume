import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface IMobileResume {
  resumeUrl: string;
}

const MobileResume = ({ resumeUrl }: IMobileResume) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
      <Viewer fileUrl={resumeUrl} plugins={[defaultLayoutPluginInstance]} />
    </Worker>
  );
};

export { MobileResume };
export type { IMobileResume };
