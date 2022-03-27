// https://github.com/wojtekmaj/react-pdf/wiki/Recipes

import React from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';

import type {ComponentProps} from 'react';

export default function ReactPdf(props: ComponentProps<any>): JSX.Element {
  const {pdf} = props;
  const [numPages, setNumPages] = React.useState<number>(0);
  const [pageNumber, setPageNumber] = React.useState(1);
  
  function onDocumentLoadSuccess({numPages}: {numPages: number}) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <>
      <div >
        <a href={pdf} className="button button--primary" >Download PDF</a>
      </div>
      <div className="card-demo-container">
        <div className="shadow--md">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page scale={1.5} pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
      <nav className="pagination-nav">
        <div className="pagination-nav__item">
          <button
            className="pagination-nav__link"
            type="button"
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(p => Math.max(1, p - 1))}
          >
            <div className="pagination-nav__sublabel">Previous</div>
            <div className="pagination-nav__label"></div>
          </button>

        </div>
        <div className="pagination-nav__item pagination-nav__item--next">
          <button
            className="pagination-nav__link"
            type="button"
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
          >
            <div className="pagination-nav__sublabel">Next</div>
            <div className="pagination-nav__label">Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</div>
          </button>
        </div>
      </nav>
    </>
  );
}