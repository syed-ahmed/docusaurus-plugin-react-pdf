// https://github.com/wojtekmaj/react-pdf/wiki/Recipes

import React from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';

import type {ComponentProps} from 'react';

export default function ReactPdf(props: ComponentProps<any>): JSX.Element {
  const {pdf, numPages, setNumPages, pageNumber, setPageNumber, documentWrapperRef} = props;
  function onDocumentLoadSuccess({numPages}: {numPages: number}) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div ref={documentWrapperRef}>
    <Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page width={documentWrapperRef.current?.getBoundingClientRect().width || undefined}
            pageNumber={pageNumber}
      />
    </Document>
    </div>
  );
}