let items = JSON.parse( localStorage.getItem('records')) ?
JSON.parse(localStorage.getItem('records')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
] 

document.addEventListener("DOMContentLoaded", ()=> {showData();});
    const addItems = document.querySelector('#add');

items.forEach((item,index)=>{
        document.querySelector('#content').innerHTML += `
        <div class="items">
        <div><input type="checkbox" id="check" onclick="visible(${index})"></div>
        <div id="name">${item.item}</div>
        <div><i class="bi bi-x" id="remove" onclick="removeItem(${index})"></i></div>
        </div>
        `
    })
console.table(items);    

function showData(){

        document.querySelector('#content').innerHTML = '';
        items.forEach((item,index)=>{
            document.querySelector('#content').innerHTML += `
            <div class="items">
            <div><input type="checkbox" id="check" onclick="visible(${index})"></div>
            <div id="name">${item.item}</div>
            <div><i class="bi bi-x" id="remove" onclick="removeItem(${index})"></i></div>
            </div>
            `
        })
    
    
}

addItems.addEventListener('click',showData());

function addData() {
    // e.preventDefault();
    items.push(
        {
            id: items.length+1,
            item: document.querySelector('#text').value,
            createdDate: new Date()
        }
    );
    localStorage.setItem('records',JSON.stringify(items));
    (function loadData() {
        console.table(items);
    })()
    showData();
}

let icon = document.querySelector('#remove')
function visible(id){
      if (document.querySelectorAll('#check')[id].checked) {
        document.querySelectorAll('#remove')[id].style.display = 'block';
        document.querySelectorAll('#name')[id].classList.add('addLine');
      } else {
        document.querySelectorAll('#remove')[id].style.display = 'block';
        document.querySelectorAll('#name')[id].classList.remove('addLine');
      }
    }
addItems.addEventListener('click', addData);

function removeItem(id) {
    if(id > -1) {
        items.splice(id, 1); 
        localStorage.setItem('records', JSON.stringify(items)); 
        // alert('Please refresh page to delete item')       
    }
        showData();
}

document.querySelector('#sort').addEventListener('click', ()=> {
    items.sort( (a, b)=> {
        // return (a.item < b.item) ? -1: 0; 
        if (a.item < b.item) {
            return -1
        }
        if (a.item > b.item) {
            return 1
        } 
            
        return 0
        
    });
    // Save new data to the localstorage
    localStorage.setItem('records', JSON.stringify(items));   
    showData();
    alert('Please refresh page to sort item') 
});

// localStorage.removeItem('records');
