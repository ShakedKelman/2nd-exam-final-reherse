// const button = document.createElement('button');
// button.setAttribute('type', 'button');
// button.setAttribute('class', 'btn btn-primary');
// button.innerHTML = 'click';

// const buttonContainer = document.createElement('div');
// buttonContainer.setAttribute('class', 'd-grid gap-2 col-6 mx-auto');
// document.body.appendChild(buttonContainer);
// buttonContainer.appendChild(button);

// const table = document.createElement('table');
// const headerRow = document.createElement('tr');
// const headers = ['id', 'name', 'email'];
// headers.forEach(headerText => {
//     const th = document.createElement('th');
//     th.textContent = headerText;
//     headerRow.appendChild(th);
// });

// // Append header row to the table
// table.appendChild(headerRow);

// button.addEventListener('click', async function () {
//     await getUsers();
// });

// async function getUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();

//         data.forEach(user => {
//             const row = document.createElement('tr');
//             ['id', 'name', 'email'].forEach(key => {
//                 const cell = document.createElement('td');
//                 cell.textContent = user[key];
//                 row.appendChild(cell);
//             });
//             table.appendChild(row);
//         });

//         document.body.appendChild(table);
        
//     } catch (error) {
//         console.error('Error fetching users:', error);
//     }
// }


function getUsers() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(data) {
            console.log('Data fetched successfully:', data);
            const table = $('<table>').addClass('table');
            const headerRow = $('<tr>');

            const headers = ['ID', 'Name', 'Email'];
            headers.forEach(headerText => {
                const th = $('<th>').text(headerText);
                headerRow.append(th);
            });

            table.append(headerRow);

       
                data.forEach(item => {
                    const row = $('<tr>'); 
                
                    const { id, username, email } = item;
                
                    const idCell = $('<td>').text(id);
                    const usernameCell = $('<td>').text(username);
                    const emailCell = $('<td>').text(email);
                
                    row.append(idCell, usernameCell, emailCell);
                
                    table.append(row);
                });
                

            $('#table-container').append(table);
            $(`body`).append(table);
            table.hide().fadeIn(2000);  
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}
getUsers();
