const dataForm = document.getElementById('data-form');
const dataTable = document.getElementById('data-table');
const tableBody = document.getElementById('table-body');
const modal = document.getElementById('myModal');
const modalClose = document.getElementById('modal-close');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');

const savedData = [];

dataForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const mydate = dataForm.mydate.value;
    const name = dataForm.name.value;
    const accountno = dataForm.accountno.value;
    const receivepayment = dataForm.receivepayment.value;
    const usepayment = dataForm.usepayment.value;
   

    savedData.push({  mydate, name, accountno, receivepayment, usepayment,  });


    dataForm.reset();
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredData = savedData.filter((data) => {
        return Object.values(data).some(value => value.toString().toLowerCase().includes(searchTerm));
    });

    if (filteredData.length > 0) {
        updateTableForModal(filteredData);
        modal.style.display = 'block';
    } else {
        alert('No matching data found.');
    }
});


modal.style.display = 'none';

function updateTableForModal(data) {
    tableBody.innerHTML = '';

    for (const item of data) {
        const row = document.createElement('tr');
        row.innerHTML = ` <td>${item.mydate} </td> <td>  ${item.name}  </td><td>${item.accountno}</td>  <td>${item.receivepayment}</td> <td>${item.usepayment} </td> </td>`;
        tableBody.appendChild(row);
    }
}




