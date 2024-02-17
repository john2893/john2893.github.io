function showInput() {
    // Get references to the input fields
    var clientName = document.getElementById("clientName").value;
    var annualRent = document.getElementById("annualRent").value;
    var securityDep = document.getElementById("securityDep").value;
    var termofPayment = document.getElementById("termofPayment").value;
    var landlordName = document.getElementById("landlordName").value;
    var startDate = document.getElementById("startdate").value;
    var endDate = document.getElementById("enddate").value;

    // Construct the table HTML with the form field values
    var tableHtml = "<table border='1'>";
    tableHtml += "<tr><th>Field</th><th>Value</th></tr>";
    tableHtml += "<tr><td>Annual Rent</td><td>" + annualRent + "</td></tr>";
    tableHtml += "<tr><td>Security Deposit</td><td>" + securityDep + "</td></tr>";
    tableHtml += "<tr><td>Term Of Payment</td><td>" + termofPayment + "</td></tr>";
    tableHtml += "<tr><td>Landlord/Rent</td><td>" + landlordName + "</td></tr>";
    tableHtml += "<tr><td>Start Date</td><td>" + startDate + "</td></tr>";
    tableHtml += "<tr><td>End Date</td><td>" + endDate + "</td></tr>";
    tableHtml += "</table>";

    // content

    var content = `Dear ${clientName}, </br>

    Your Annual rent is ${annualRent} and your security deposit is ${securityDep}.</br>
    The term of payment is ${termofPayment}. Below are the dates: </br></br>
    Start Date: ${startDate} </br>
    End Date: ${endDate}
    `

    // Display the table
    document.getElementById("formTable").innerHTML = tableHtml;

    //Display the content
    document.getElementById("result").innerHTML = content;

  }