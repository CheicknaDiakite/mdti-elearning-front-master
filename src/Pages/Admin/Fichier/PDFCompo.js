
import React, { useState } from 'react'
// import pdf from './c1.pdf'
import { Document, Page } from 'react-pdf';

export default function PDFCompo({pdf}) {
    const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className='pdf-div'>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null,Array(numPages))
        .map((x, i) => i+1)
        .map((page) => { return (

            <Page 
                pageNumber={page} 
                renderTextLayer={false} 
                renderAnnotationLayer={false} 
            />
        );
        })
        }
      </Document>
      
    </div>
  )
}
