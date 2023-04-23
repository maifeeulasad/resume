import { useEffect, useRef } from 'react';
import * as pdfjs from 'pdfjs-dist';
import { PDFPageProxy } from 'pdfjs-dist';

interface IPdfViewer{
  url: string
}

const PdfViewer = ({url}: IPdfViewer) => {
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
    pdfjs.getDocument({ url }).promise.then(
      pdfDocument => {
        pdfDocument.getPage(1).then(
          page => renderPDF(page)
        );
      }
    );
  }, [canvasRef, url]);

  return <canvas ref={canvasRef} />
}

export {PdfViewer}