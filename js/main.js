let inputClk = document.querySelector('.inputClick');
let getData = JSON.parse(localStorage.getItem('todoList'));
let myList = document.querySelector('#myList');
let liElmt = document.createElement('LI');
console.log(getData.todo.length);
// console.log(getData);
if (getData !== null) {
    for (let i = 0; i < getData.todo.length; i++) {
        liElmt.appendChild(getData.todo[0]);
    }
    myList.appendChild(liElmt);
}

inputClk.addEventListener('click', function() {
    let inputVal = document.querySelector('.inputVal');
    let node = document.createElement('LI');
    let textnode = document.createTextNode(inputVal.value);


    const data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
        todo: []
    };
    data.todo.push(inputVal.value);
    localStorage.setItem('todoList', JSON.stringify(data));

    node.appendChild(textnode);
    myList.appendChild(node);

    // console.log(inputVal.value);
    // let html = '';

    // html += `<p class="text">${inputval.value}</p>`;



})