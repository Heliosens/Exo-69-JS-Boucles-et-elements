let go = document.getElementById('go');
let list = document.getElementById('liste-commissions');

go.addEventListener('click', function (){
    let userText = document.getElementById('userText').value;
    let newLi = document.createElement('li');
    newLi.innerHTML = userText;
    list.appendChild(newLi);
})

