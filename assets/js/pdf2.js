function genPDF() {
  console.log("hi")
  var doc = new jspdf()

  //variables
  var clientName = document.getElementById("clientName").value;
  var landlordName = document.getElementById("landlordName").value;
  var annualRent = document.getElementById("annualRent").value;
  var securityDep = document.getElementById("securityDep").value;
  var termofPayment = document.getElementById("termofPayment").value;
  var startDate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;


  var content = `Dear ${clientName},

Congratulations on taking the first steps in your home marketing campaign. You’re doing a great job. 
The pictures look excellent, the copy is well thought out, and you seem to be consistent with the open house appointments.

However, I noticed you could use some assistance with the (presentation of your home or bring up another weak spot).

If you decide to give it a try, let me know how it works.

Your annual rent is ${annualRent} and your security deposit is ${securityDep}.

Name of your Landlord:  ${landlordName}.

I would love to tell you more about how I can help you achieve a stress-free selling process. If you are interested in pursuing the matter, call or text me on my cell.

Below are the dates:
  Start Date: ${startDate}
  End Date: ${enddate}



(Name)

(Phone number)

`

  // Set font size and type for the content
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  var pageSize = doc.internal.pageSize
  var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth()


  // Split the content into an array of strings that fit within the page width
  var textLines = doc.splitTextToSize(content, pageWidth - 40); // Subtracting 40 for padding

  // Add the content to the PDF
  doc.text(textLines, 16, 30);
  var contentHeight = doc.getTextDimensions(textLines).h + 80; // Adding 40 for padding


  // Simple data example
  var head = [['Annual Rent', 'Security Deposit', 'Term Of Payment', 'Landlord/Rent', 'Start Date', 'End Date']]
  var body = [[annualRent, securityDep, termofPayment, '34', startDate, enddate],]


  //doc.autoTable({ head: head, body: body })

  doc.autoTable({
    head: head,
    body: body,
    startY: contentHeight + 20,
    showHead: 'firstPage',
    theme: 'grid', // Use the 'grid' theme
        styles: {
            lineWidth: 0.2, // Set the border width to 0.2 (thin)
            lineColor: [0, 0, 0], // Set the border color to black
            valign: 'middle', // Center the text vertically
            halign: 'center' // Center the text horizontally
        },
        columnStyles: {
            // Apply text wrapping to all columns
            0: { cellWidth: 'wrap' },
            1: { cellWidth: 'wrap' },
            2: { cellWidth: 'wrap' },
            3: { cellWidth: 'wrap' },
            4: { cellWidth: 'wrap' },
            5: { cellWidth: 'wrap' }
        },
        split: 'avoid' // Avoid splitting the table across pages
  })
  


  // Simple html example
  
  doc.autoTable({ html: '#table' })

  doc.save('table.pdf')
}