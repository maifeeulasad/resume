import React, { useState, useEffect, useRef } from 'react';
import { osCheck, OsType } from "os-check";
import * as pdfjs from 'pdfjs-dist';
import { PDFPageProxy } from 'pdfjs-dist';

interface IPdfViewer{
  url: string
}

const PdfViewer = ({url}: IPdfViewer) => {
  const [loading, setLoading] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = "./pdf.worker.js";
  }, []);
  
  const renderPDF = (page: PDFPageProxy) => {
    const viewport = page.getViewport({ scale: 1 });
    const canvasEl = canvasRef!.current;

    const canvasContext = canvasEl!.getContext('2d')!;

    canvasEl!.height = viewport.height;
    canvasEl!.width = viewport.width;

    page.render({
      canvasContext,
      viewport,
    });
  };
  
  useEffect(() => {
    setLoading(true)
    pdfjs.getDocument({ url }).promise.then(
      pdfDocument => {
        pdfDocument.getPage(1).then(
          (page) => {
            renderPDF(page);
            setLoading(false);
          }
        );
      }
    );
  }, [canvasRef, url]);

  const isDesktop = [OsType.Linux, OsType.MacOS, OsType.Windows].includes(osCheck())

  if (isDesktop) {
    return <embed width="100%" height="100%" src={url} type="application/pdf" />
  } else {
    return <>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%' }} />
      <dialog open={loading}>
        Loading
      </dialog>
    </>
  }
  
}

export {PdfViewer}