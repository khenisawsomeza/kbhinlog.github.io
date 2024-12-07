let employeeCount = 0;

document.getElementById('calculatePayroll').addEventListener('click', function() {
    const employeeName = document.getElementById('employeeName').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionamount = parseFloat(document.getElementById('deductionamount').value);

    if (!employeeName || isNaN(daysWorked) || isNaN(dailyRate) || daysWorked < 0 || dailyRate < 0) {
        alert('Please enter valid values for all fields.');
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionamount;

    const tableBody = document.getElementById('payrollTable').querySelector('tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${++employeeCount}</td>
        <td>${employeeName}</td>
        <td>${daysWorked}</td>
        <td>₱${dailyRate.toFixed(2)}</td>
        <td>₱${grossPay.toFixed(2)}</td>
        <td>₱${deductionamount.toFixed(2)}</td>
        <td>₱${netPay.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
});

document.getElementById('deleteRow').addEventListener('click', function() {
    const rowNumber = parseInt(document.getElementById('delete').value);
    if (isNaN(rowNumber) || rowNumber < 1 || rowNumber > employeeCount) {
        alert('Please enter a valid row number.');
        return;
    }

    const tableBody = document.getElementById('payrollTable').querySelector('tbody');
    tableBody.deleteRow(rowNumber - 1);

    const rows = tableBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1;
    });

    employeeCount--;
});