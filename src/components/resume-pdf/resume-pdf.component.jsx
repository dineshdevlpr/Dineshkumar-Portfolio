import React, { useState } from 'react'
import './resume-pdf.styles.scss';
//pdf file
import Resume from '../../assets/resume.pdf';
//react-pdf
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;





const ResumePdf = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const pdfWrapperRef = React.useRef();

    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

    return (
        <section className='resume-pdf'>
            <div className='pdf-container' ref={pdfWrapperRef}>
                <Document className="custom-class-name-1" file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width={(pdfWrapperRef.current?.getBoundingClientRect().width) || undefined}/>
                </Document>
            </div>
        </section>
    )
}

export default ResumePdf
