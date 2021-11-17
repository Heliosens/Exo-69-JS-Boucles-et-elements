let valid = document.getElementById('valid');
let list = document.getElementById('liste-commissions');
let listItem = list.getElementsByTagName('li');
let clear = document.getElementById('clear');

let Text = "une baleine";
let thirdLi = document.createElement('li');
thirdLi.innerHTML = Text;
list.appendChild(thirdLi);

valid.addEventListener('click', function (){
    let userText = document.getElementById('userText').value;
    let newLi = document.createElement('li');
    newLi.innerHTML = userText;
    list.appendChild(newLi);
})

clear.addEventListener('click', function (){
    if(listItem.length > 0){
        listItem[listItem.length - 1].remove();
    }
    else {
        alert("il n'y a plus d'item de liste")
    }
})

