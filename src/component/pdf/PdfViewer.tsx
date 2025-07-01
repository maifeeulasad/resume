import React from 'react';

interface IPdfViewer{
  url: string
}

const PdfViewer = ({url}: IPdfViewer) => <embed width="100%" height="100%" src={url} type="application/pdf" />

export {PdfViewer}
