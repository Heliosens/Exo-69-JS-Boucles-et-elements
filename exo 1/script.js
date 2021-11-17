let go = document.getElementById('go');
let list = document.getElementById('liste-commissions');

let Text = "une baleine";
let thirdLi = document.createElement('li');
thirdLi.innerHTML = Text;
list.appendChild(thirdLi);

go.addEventListener('click', function (){
    let userText = document.getElementById('userText').value;
    let newLi = document.createElement('li');
    newLi.innerHTML = userText;
    list.appendChild(newLi);
})
