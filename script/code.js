let items = [
    {
        id: 1,
        item: 'TV Stand',
        createdDate: new Date()
    }
]

items.forEach(item=>{
    document.querySelector('#content').innerHTML += `
    <table id="items">
    <td><input type="checkbox" class="checkbox" id="check" onclick="visible()"></td>
    <td>${item.item}</td>
    <td><i class="bi bi-x" id="remove"></i></td>
    </table>
    `
})

const checkBox = document.querySelector('#check');
let icon = document.querySelector('#remove')

function visible(){
if (icon.style.display === "block") {
    icon.style.display = 'none'
}else{
    icon.style.display = 'block'
}
}
