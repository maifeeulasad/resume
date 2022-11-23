import React from "react";

interface INativeResume {
  resumeUrl: string;
}

const NativeResume = ({ resumeUrl }: INativeResume) => (
  <embed width="100%" height="100%" src={resumeUrl} type="application/pdf" />
);

export { NativeResume as DesktopResume };
export type { INativeResume as IDesktopResume };
