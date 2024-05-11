import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const initialData = [
    { id: 1, description: 'Product 1', quantity: 3, unit: 1, price: 12.9 },
    { id: 2, description: 'Product 2', quantity: 5, unit: 1, price: 10 },
    { id: 3, description: 'Product 3', quantity: 2, unit: 6, price: 12.9 },
    { id: 4, description: 'Product 4', quantity: 1, unit: 1, price: 14.9 },
    { id: 5, description: 'Product 5', quantity: 7, unit: 9, price: 2.13 },
    { id: 6, description: 'Product 6', quantity: 4, unit: 1, price: 1.9 },
  ]

  const [data, setData] = useState(initialData);
  console.log(data);
  const doc = new jsPDF()
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  const handleDownloadPDF = () => {
    console.log("pdf exported");
    autoTable(doc, { html: "#dnote-table" });
    doc.save('delivery-note.pdf');
  }

  return (
    <>
      {/* <button className="btn btn-primary border p-2 my-2" onClick={exportPDFHandler}>Export PDF</button> */}
      <div className="flex flex-col justify-center items-center mt-4">
        <button className="mb-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Print
        </button>
        <button onClick={handleDownloadPDF} className="mb-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
          Download PDF
        </button>
      </div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}
        id="dnote-table"

      >
        <thead>
          <tr style={{ border: '1px solid #ddd', background: 'orange' }}>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Quantity</th>
            <th style={cellStyle}>Unit</th>
            <th style={cellStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              // console.log(item.id)
              <tr key={item.id} style={{ border: '1px solid #ddd' }}>
                <td style={cellStyle}>{item.id}</td>
                <td style={cellStyle}>{item.quantity}</td>
                <td style={cellStyle}>{item.unit}</td>
                <td style={cellStyle}>{item.description}</td>
              </tr>
            ))
          }
        </tbody>

      </table>
    </>
  );
}
const cellStyle = {
  padding: '12px',
  textAlign: 'left',
  color: 'black'
};
