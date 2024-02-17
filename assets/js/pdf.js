function genPDF() {

  console.log("hi")
  // import { jsPDF } from "jspdf";
  // // Retrieve form field values
  var clientName = document.getElementById("clientName").value;
  var annualRent = document.getElementById("annualRent").value;
  var securityDep = document.getElementById("securityDep").value;
  var termofPayment = document.getElementById("termofPayment").value;

  // // Construct content for PDF
  var content = `

    Dear ${clientName},

    Your Annual Rent is $${annualRent}. We currently have your Security Deposit of $${securityDep}
    with us. The Term of Payment is Term Of Payment: $${termofPayment}.


  `;

  var options = {
    //beforePageContent: header,
    margin: {
      top: 50 
    },
    styles: {
      overflow: 'linebreak',
      fontSize: 8,
      rowHeight: 'auto',
      columnWidth: 'wrap'
    },
    columnStyles: {
      1: {columnWidth: 'auto'},
      2: {columnWidth: 'auto'},
      3: {columnWidth: 'auto'},
      4: {columnWidth: 'auto'},
      5: {columnWidth: 'auto'},
      6: {columnWidth: 'auto'},
    },
    //startY: startY+=50
  };

  var columns = [
    {title: "ID", dataKey: "id",width: 90},
    {title: "Product", dataKey: "Product",width: 40}, 
    {title: "Rate/Item", dataKey: "Rate/Item",width: 40}, 
    {title: "Qty", dataKey: "Qty",width: 40}, 
    {title: "Dsnt", dataKey: "Dsnt",width: 40}, 
    {title: "S.Total", dataKey: "STotal",width: 40}, 
    {title: "CGST", dataKey: "CGST",width: 40}, 
    {title: "SGST", dataKey: "SGST",width: 40}, 
    {title: "IGST", dataKey: "IGST",width: 40}, 
    {title: "CESS", dataKey: "CESS",width: 40}, 
    {title: "Total", dataKey: "Total",width: 40}, 
];
  var rows = [
    {"id": 1, "Product": "SAMSUNG GALAXY S8 PLUS 64GB HSNCODE: 330854040", "Rate/Item": "10","Qty" : "12","Dsnt":"0","STotal":"120","CGST":20,"SGST":20,"IGST":0,"CESS":20,"Total":180}
  ];

  // // Create PDF document
  doc.autoTable(columns, rows, options);
  //startY=doc.autoTableEndPosY()+30;

  var doc = new jsPDF();
  doc.text(content, 10, 10); // Add content to PDF at position (10, 10)
  
  // Save or download the PDF
  doc.save("generated_pdf.pdf");
}