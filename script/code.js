let items = JSON.parse( localStorage.getItem('records')) ?
JSON.parse(localStorage.getItem('records')) : [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
]
items.forEach(item=>{
    document.querySelector('#content').innerHTML += `
    <div id="items">
    <div><input type="checkbox" class="checkbox" id="check" onclick="visible()"></div>
    <div>${item.item}</div>
    <div><i class="bi bi-x" id="remove"></i></div>
    </div>
    `
});
const addItems = document.querySelector('#add');




const checkBox = document.querySelector('#check');
let icon = document.querySelector('#remove')
function visible(){
    if (icon.style.display === "block") {
        icon.style.display = 'none'
    }else{
        icon.style.display = 'block'
    }

    }


function addData() {
    // e.preventDefault();
    addItems.addEventListener('click',()=>{
        document.querySelector('#content').innerHTML = '';
        items.forEach(item=>{
            document.querySelector('#content').innerHTML += `
            <div id="items">
            <div><input type="checkbox" class="checkbox" id="check" onclick="visible()"></div>
            <div class="name">${item.item}</div>
            <div><i class="bi bi-x" id="remove"></i></div>
            </div>
            `
        })
    
    })
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
}
document.querySelector('#add').addEventListener('click', addData);

// localStorage.removeItem('records');
