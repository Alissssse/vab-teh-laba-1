/* eslint-disable max-len */
//'use strict'
let perPage = 5;
let currentPage = 1;
let totalPage = 0;
const mainUrl = 'http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/';



function renderOrders(orders) { 
    const tbody = document.querySelector(".tbody");
    tbody.innerHTML = ''; 
    for (const result of orders) {
        console.log(orders);
        const tr = document.createElement("tr"); 
        tr.id = result.id; 
        const name = document.createElement("td"); 
        name.textContent = result.name; 
        tr.append(name); 
        const description = document.createElement("td"); 
        description.textContent = result.description; 
        tr.append(description); 
        const mainObject = document.createElement("td"); 
        mainObject.textContent = result.mainObject; 
        //Не наше
        /*const changeBtn = document.createElement('button')
        changeBtn.textContent = "Выбрать";
        changeBtn.addEventListener("click", event => guidsData(tr, event));
        */
        tr.append(mainObject); 
        //tr.append(changeBtn);
        tbody.appendChild(tr);
    
    }
}

function renderPagination() {
    const blockPagination = document.querySelector('.pagination');
    blockPagination.innerHTML = '';
    //Не наше
    /*const prevBtn = document.createElement("button");
    prevBtn.textContent = 'Назад';
    prevBtn.style.margin = '2px';
    prevBtn.style.backgroundColor = 'none';
    prevBtn.addEventListener('click', (event) => {
        if (curPage > 1) {
            curPage--;
            getOrgers();
        }
    });
    blockPagination.append(prevBtn);
    */
    for (let i = 1; i <= totalPage; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (currentPage === i) {
            btn.style.backgroundColor = 'red';
        } else {
            btn.style.backgroundColor = 'none';
        }
        btn.addEventListener('click', (event)=>{
            const target = event.target;
            currentPage = target.textContent;
            getOrgers();
        });
        blockPagination.append(btn);   
    }
}

function getOrgers() {
    const url = new URL('routes', mainUrl);
    url.searchParams.set('api_key', '463b6c62-dc21-405d-9a9b-0bd1f64a7ffd');
    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.send();
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        totalPage = Math.ceil(data.length / perPage);
        const start = currentPage * perPage - perPage;
        const end = currentPage * perPage;
        //Не наше
        /*for (const record of records) {
            const select = document.querySelector('.form-select');
            for (const elem of splitMainObject(record.mainObject)) {
                const option = document.createElement("option");
                option.textContent = elem;
                select.append(option);
            };
        }*/
        //
        renderOrders(data.slice(start, end));
        renderPagination();
    };
    //Не наше xhr.send();
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(this.response);
            // остальной код...
        } else {
            console.error('Ошибка при получении данных с сервера');
        }
    };
    

}



window.addEventListener('DOMContentLoaded', getOrgers);







/* eslint-disable max-len 

let perPage = 3;
let currentPage = 1;
let totalPage = 0;
const mainUrl = 'http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/';

function renderOrders(orders) {
    const tbody = document.querySelector(".tbody");    
    tbody.innerHTML = ''; 
    for (const result of orders) {
        console.log(orders);
        const tr = document.createElement("tr"); 
        tr.id = result.id; 
        const name = document.createElement("td"); 
        name.textContent = result.name; 
        tr.append(name); 
        const description = document.createElement("td"); 
        description.textContent = result.description; 
        tr.append(description); 
        const mainObject = document.createElement("td"); 
        mainObject.textContent = result.mainObject; 
        tr.append(mainObject); 
        tbody.appendChild(tr); 
    
    }

}

/*function renderPagination() {
    const blockPagination = document.querySelector('.pagination');
    blockPagination.innerHTML = '';

    // Create buttons for the first 5 pages
    for (let i = 1; i <= Math.min(totalPage, 5); i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (currentPage === i) {
            btn.style.backgroundColor = 'red';
        }
        btn.addEventListener('click', (event)=>{
            const target = event.target;
            currentPage = target.textContent;
            getOrders();
        });
        blockPagination.append(btn);
    }

    // Add "..." or "Next" button if there are more than 5 pages
    if (totalPage > 5) {
        const moreBtn = document.createElement('button');
        moreBtn.textContent = '...';
        moreBtn.addEventListener('click', () => {
            // Show the next set of pages
            blockPagination.innerHTML = ''; // Clear the pagination
            const startPage = Math.min(totalPage - 4, parseInt(currentPage) + 1); // Determine the first page number in the new set
            for (let i = startPage; i <= Math.min(totalPage, startPage + 4); i++) {
                const btn = document.createElement('button');
                btn.textContent = i;
                if (currentPage === i) {
                    btn.style.backgroundColor = 'red';
                }
                btn.addEventListener('click', (event)=>{
                    const target = event.target;
                    currentPage = target.textContent;
                    getOrders();
                });
                blockPagination.append(btn);
            }
         });
        blockPagination.append(moreBtn);
    }
}
*/


function renderPagination() {
    const blockPagination = document.querySelector('.pagination');
    blockPagination.innerHTML = '';
    for (let i = 1; i <= totalPage; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (currentPage === i) {
            btn.style.backgroundColor = 'red';
        } else {
            btn.style.backgroundColor = 'none';
        }
        btn.addEventListener('click', (event)=>{
            const target = event.target;
            currentPage = target.textContent;
            getOrgers();
        });
        blockPagination.append(btn);   
    }
}

function getOrgers() {
    const url = new URL('routes', mainUrl);
    url.searchParams.set('api_key', '463b6c62-dc21-405d-9a9b-0bd1f64a7ffd'); 
    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.send();
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        totalPage = Math.ceil(data.length / perPage);
        const start = currentPage * perPage - perPage;
        const end = currentPage * perPage;
        renderOrders(data.slice(start, end));
        renderPagination();
    };

}

window.addEventListener('DOMContentLoaded', getOrgers);


